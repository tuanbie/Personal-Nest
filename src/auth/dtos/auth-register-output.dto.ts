import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
// import { Role } from '../../user/entities/role.entity';

export class RegisterOutput {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  username: string;
  //
  // @Expose()
  // @ApiProperty()
  // roles: Role;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  isAccountDisabled: boolean;

  @Expose()
  @ApiProperty()
  createdAt: string;

  @Expose()
  @ApiProperty()
  updatedAt: string;
}
