import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { PermissionOutput } from './permission-output.dto';

export class RoleOutput {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  roleName: string;

  @Expose()
  @ApiProperty()
  @Type(() => PermissionOutput)
  permissions: PermissionOutput[];
}
