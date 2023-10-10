import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/index';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn('increment')
    imageId: number;

    @Column('varchar')
    url: string;

    @Column('varchar')
    type: string;

    @ManyToOne(type => User, user => user.photos)
    user: User;
}
