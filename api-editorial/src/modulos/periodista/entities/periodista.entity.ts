import { Revista } from "../../revista/entities/revista.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Periodistas')
export class Periodista{

    @PrimaryGeneratedColumn('uuid')
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
    (revista) => revista.periodistarel,
    {  onDelete: 'CASCADE' } )
    revistarel: Revista[];
  periodista: Revista;
}