import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ForgotPassword {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;
}
