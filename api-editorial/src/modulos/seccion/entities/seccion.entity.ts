import { Revista } from "../../revista/entities/revista.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Secciones')
export class Seccion {

    @PrimaryColumn()
    titulo:string;

    @Column('text')
    extension: string;

    @ManyToOne(
        () => Revista,
        (Revista) => Revista.seccionrel
    )
    revistarel: Revista;
}