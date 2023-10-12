import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from '../../photo/index';
import { Role } from './';


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

  @Column('varchar')
  refresToken: string;

  @Column('varchar')
  status: string;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
