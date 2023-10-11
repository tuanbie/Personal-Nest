import { IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordInput {
  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsString()
  newPassword!: string;
}
