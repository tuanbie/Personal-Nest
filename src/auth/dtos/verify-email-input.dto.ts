import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyEmailInput {
  @IsNotEmpty()
  @IsString()
  id!: string;

  @IsNotEmpty()
  @IsString()
  code!: string;
}
