import { Revista } from "../../revista/entities/revista.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Ejemplares')
export class Ejemplar {

    @PrimaryColumn()
    id:string;

    @Column('text')
    fecha: string;

    @Column('integer')
    numejemplares: number;

    @Column('integer')
    numpaginas: number;

    @ManyToOne(
        () => Revista,
        (Revista) => Revista.ejemplarrel
    )
    revistarel: Revista;
}