import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class LoginSocialInput {
  @IsString()
  @IsOptional()
  @Transform(({ value }) => (!value || value === '' ? null : value))
  appleId?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => (!value || value === '' ? null : value))
  googleId?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => (!value || value === '' ? null : value))
  facebookId?: string;

  @IsString()
  @IsOptional()
  fullname?: string;
}

export class syncLoginSocialInput {
  @IsString()
  @IsOptional()
  appleId?: string;

  @IsString()
  @IsOptional()
  googleId?: string;

  @IsString()
  @IsOptional()
  facebookId?: string;

  @IsString()
  @IsOptional()
  fullname?: string;

  @IsBoolean()
  @IsOptional()
  isExpert?: boolean;

  @IsNumber()
  @IsOptional()
  province?: number;
}
