import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './providers/user.service';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { JwtPayload, Payload, RefreshTokenPayload } from 'src/auth/auth.interface';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    // private config: ConfigService,
    // private jwt: JwtService,
    private readonly userService: UserService
    ) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = this.userService.createUser(createUserDto);
    // const jwt = this.generateToken(user);
  }

  @Get()
  findAll() {
    return this.userService.findAllUser();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.viewUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
  // public generateToken(user: any ): {
  //   accessToken: string;
  //   refreshToken: string;
  // } {
  //   return {
  //     accessToken: this.generateAccessToken({
  //       id: user.id,
  //       email: user.email,
  //       roles: user.roles,
  //     }),
  //     refreshToken: this.generateRefreshToken({
  //       sub: user._id,
  //     }),
  //   };
  // }
  // public generateAccessToken(data: any): string {
  //   const payload: JwtPayload = {
  //     sub: data.id,
  //     email: data.email,
  //     roles: data.roles,
  //   };
  //   return this.jwt.sign(payload);
  // }
  // public generateRefreshToken(data: RefreshTokenPayload): string {
  //   return this.jwt.sign(data);
  // }
}
