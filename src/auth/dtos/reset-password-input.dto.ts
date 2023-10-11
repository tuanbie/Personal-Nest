import { IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordInput {
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsString()
  code!: string;
}
