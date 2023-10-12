import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'permission', schema: process.env.DB_SCHEMA })
export class Permission {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'permission_name' })
  permissionName!: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  modifiedAt!: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt!: Date;
}
