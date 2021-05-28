import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ROLES')
export class Roles {
  @PrimaryGeneratedColumn()  
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
