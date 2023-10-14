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
    return this.userRepository.save({
      ...createUserDto,
      password: hash,
      roles: [role],
    });
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.fullname = updateUserDto.name;
    user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
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
