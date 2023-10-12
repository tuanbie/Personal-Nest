import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class RegisterInput {
  @ApiProperty()
  @MaxLength(255)
  @IsString()
  username!: string;

  @ApiProperty()
  @MaxLength(255)
  @IsEmail()
  email!: string;

  @ApiProperty()
  @Length(6, 255)
  @IsString()
  password!: string;

  @ApiProperty()
  @IsBoolean()
  isAcceptPolicy!: boolean;
}
