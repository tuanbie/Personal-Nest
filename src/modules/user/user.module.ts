import { Module } from '@nestjs/common';
import { UserService } from './providers/index';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import * as providers from './providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: Object.values(providers),
  exports: [UserService],
})
export class UserModule { }