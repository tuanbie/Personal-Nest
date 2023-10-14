import { Module } from '@nestjs/common';
import { UserService, RoleService } from './providers/index';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import * as providers from './providers';
import { Role } from './entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User,Role])
  ],
  controllers: [UserController],
  providers: Object.values(providers),
  exports: [UserService, RoleService],
})
export class UserModule { }