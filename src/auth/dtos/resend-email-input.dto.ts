import { IsEmail, IsNotEmpty } from 'class-validator';

export class ResendEmailInput {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
