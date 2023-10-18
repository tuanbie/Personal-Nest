import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permisson.entity';
import { ROLE } from '../../../common/constants/index';
import { User } from '.';

@Entity({ name: 'role', schema: process.env.DB_SCHEMA })
export class Role {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({
    type: 'enum',
    enum: ROLE,
  })
  roleName: string;

  @OneToMany(() => User, user => user.roles)
  user: User;

  // @Column('timestamp', {
  //   nullable: false,
  //   default: () => 'CURRENT_TIMESTAMP',
  //   name: 'updated_at',
  // })
  // modifiedAt!: Date;

  // @Column('timestamp', {
  //   nullable: false,
  //   default: () => 'CURRENT_TIMESTAMP',
  //   name: 'created_at',
  // })
  // createdAt!: Date;

  // @ManyToMany(() => Permission)
  // @JoinTable()
  // permissions: Permission[];
}
