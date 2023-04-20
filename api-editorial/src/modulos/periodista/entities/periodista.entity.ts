import { Revista } from "../../revista/entities/revista.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Periodistas')
export class Periodista{

    @PrimaryColumn()
    id:string;

    @Column('text')
    especialidad: string;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido1: string;

    @Column('text')
    apellido2: string;

    @Column('integer')
    telefono: number;

    @ManyToMany(
    () => Revista, 
    (Revista) => Revista.periodistarel)
    revistarel?: Revista[];
}