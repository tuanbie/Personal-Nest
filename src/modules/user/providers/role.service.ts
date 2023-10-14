import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Role } from '../entity';
import { RoleEnum } from 'src/common/enum';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    // private config: ConfigService,
    private readonly roleRepository: Repository<Role>,
  ) { }

  public async getRole(
    roleName: string
  ): Promise<Role> {
    const role = await this.roleRepository.findOne({
      where: {
        roleName: roleName,
      },
    });
    return role
  }
}
