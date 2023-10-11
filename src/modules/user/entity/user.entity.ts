import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from '../../photo/index';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  email: string;

  @Column('int')
  age: number;

  @Column('varchar')
  password: string;

  @Column('varchar')
  gender: string;

  @Column('varchar')
  refresToken: string;

  @Column('varchar')
  status: string;

  @OneToMany(type => Photo, photo => photo.user)
  photos: Photo[];
}
