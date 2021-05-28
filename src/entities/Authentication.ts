import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./Roles";

@Entity('AURTHENTICATION')
export class Authentication {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    @OneToMany(type => Roles,role => role.id)
    roles: Roles[];
}