import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { RoleOutput } from '../dtos/role-output.dto';
import { UserOutputDto } from '../../modules/user/dtos/user-output.dto';

export class UserAccessTokenClaims {
  @Expose()
  id: string;
  @Expose()
  email: string;
  @Expose()
  roles: RoleOutput[];
}

export class UserAuthOutput {
  @Expose()
  @ApiProperty()
  token: string;

  @Expose()
  @ApiProperty()
  refreshToken: string;

  @Expose()
  @ApiProperty()
  infoUser: UserOutputDto;

  @Expose()
  @ApiProperty()
  isExpert: boolean;
}

export class AuthOutput {
  @Expose()
  @ApiProperty()
  error: boolean;

  @Expose()
  @ApiProperty()
  data: UserAuthOutput;

  @Expose()
  @ApiProperty()
  message: string;

  @Expose()
  @ApiProperty()
  code: number;
}
