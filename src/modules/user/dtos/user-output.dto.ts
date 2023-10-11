import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { RoleOutput } from 'src/auth/dtos';

export class UserOutputDto {
  @Expose()
  @ApiProperty()
  public _id: string;

  @Expose()
  @ApiProperty()
  public fullname: string;

  @Expose()
  @ApiProperty()
  public email: string;

  @Expose()
  @ApiProperty()
  public phone: string;

  @Expose()
  @ApiProperty()
  public isVerifyEmail: boolean;

  @Expose()
  @ApiProperty()
  public appleId: string;

  @Expose()
  @ApiProperty()
  public googleId: string;

  @Expose()
  @ApiProperty()
  public facebookId: string;

  @Expose()
  @ApiProperty()
  public username: string;

  @Expose()
  @ApiProperty()
  public gender: boolean;

  @Expose()
  @ApiProperty()
  public emailVerifyCode: string;

  @Expose()
  @ApiProperty()
  public birthDate: Date;

  @Expose()
  @ApiProperty()
  public status: number;

  @Expose()
  @ApiProperty()
  @Type(() => Date)
  public createdAt: Date;

  @Expose()
  @ApiProperty()
  @Type(() => RoleOutput)
  roles: RoleOutput[];
}
