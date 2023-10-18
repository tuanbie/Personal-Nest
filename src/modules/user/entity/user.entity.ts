import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from '../../photo/index';
import { Role, Permission } from './index';


@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { nullable: true, length: 255, name: 'fullname' })
  fullname: string;

  @Column('varchar', { nullable: true, length: 255, name: 'username' })
  username: string;

  @Column('varchar', { nullable: false, length: 255, name: 'email' })
  email: string;

  @Column('int')
  age: number;

  @Column('varchar', { nullable: false, length: 255, name: 'password' })
  password: string;

  @Column('varchar', { nullable: true, length: 255, name: 'phone' })
  phone?: string;

  @Column('varchar')
  gender?: string;

  @Column('varchar', { nullable: true, name: 'refreshToken' })
  refreshToken?: string;

  @Column('varchar', { nullable: true, name: 'emailVerifyCode' })
  emailVerifyCode?: string;

  @Column('varchar')
  status: string;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];

  @ManyToOne(() => Role, role => role.user)
  @JoinColumn({ name: 'role_id' })
  roles: Role;

  // @ManyToMany(() => Permission)
  // @JoinTable()
  // permissions: Permission[];
}
