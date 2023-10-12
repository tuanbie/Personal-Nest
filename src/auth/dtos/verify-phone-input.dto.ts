import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyPhoneInput {
  @IsNotEmpty()
  @IsString()
  phone!: string;

  @IsNotEmpty()
  @IsString()
  code!: string;
}
