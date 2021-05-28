import { type } from "node:os";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from './Roles';

@Entity('USERS')
export class User {

    @PrimaryGeneratedColumn({type: 'integer'})
    id: number;
    @Column()
    name: string;
}