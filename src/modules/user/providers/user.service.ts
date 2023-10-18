import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entity/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MESSAGES } from '../../../common/constants/common';
import * as bcrypt from 'bcrypt';
import { Role } from '../entity';
import { RoleEnum } from 'src/common/enum';
import { RoleService } from './role.service';
import { UserOutputDto } from '../dtos';
import { BaseApiResponse } from 'src/shared/dtos';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) { }

  public async createUser(
    createUserDto: CreateUserDto
  ): Promise<User> {
    const userExist = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (userExist)
      throw new HttpException(
        {
          error: true,
          data: null,
          message: MESSAGES.EMAIL_EXISTS,
          code: 409,
        },
        HttpStatus.BAD_REQUEST,
      );
    const hash = await bcrypt.hash(createUserDto.password, 10);
    const role = await this.roleService.getRole(RoleEnum.MANAGER);
    const userInfo = this.userRepository.create(createUserDto)
    return await this.userRepository.save({
      ...userInfo,
      password: hash,
      roles: role,
      status: 'a'
    });
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  public async update(
    id: number,
    data: any,
  ): Promise<BaseApiResponse<UserOutputDto>> {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!user)
      throw new HttpException(
        {
          error: true,
          message: MESSAGES.NOT_FOUND_USER,
          code: 404,
        },
        HttpStatus.BAD_REQUEST,
      );
    this.userRepository.merge(user, data);
    const updated = await this.userRepository.save(user);
    // create user into realtime service
    const result = plainToInstance(UserOutputDto, updated, {
      excludeExtraneousValues: true,
    });
    return {
      error: false,
      data: result,
      message: MESSAGES.UPDATE_SUCCEED,
      code: 200,
    };
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }

  // public async create(data: RegisterInput): Promise<User> {
  //   const userExist = await this.userRepository.findOne({
  //     where: {
  //       email: data.email,
  //     },
  //   });
  //   if (userExist)
  //     throw new HttpException(
  //       {
  //         error: true,
  //         data: null,
  //         message: MESSAGES.EMAIL_EXISTS,
  //         code: 409,
  //       },
  //       HttpStatus.BAD_REQUEST,
  //     );

  //   const hash = bcrypt.hashSync(
  //     data.password,
  //     this.config.get('saltRounds') || 7,
  //   );
  //   const normalRole = await this.roleService.getRoleByName(ROLES.STUDENT);
  //   if (!normalRole)
  //     throw new HttpException(
  //       {
  //         error: true,
  //         data: null,
  //         message: MESSAGES.ROLE_NOT_FOUND,
  //         code: 404,
  //       },
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   return this.userRepository.save({
  //     ...data,
  //     password: hash,
  //     roles: [normalRole],
  //   });
  // }
}
