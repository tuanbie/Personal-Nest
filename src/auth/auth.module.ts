import { Module } from '@nestjs/common';
import { AuthServie } from './auth.service';
import { AuthController } from './controller/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthServie],
  exports: [AuthServie],
})
export class AuthModule { }