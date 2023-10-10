import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
// npm run build && npx typeorm -d dist/config/dbconfig.js "migration:generate" "src/migrations/migration"
