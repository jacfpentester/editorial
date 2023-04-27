import { Seccion } from "../../seccion/entities/seccion.entity";
import { Ejemplar} from "../../ejemplar/entities/ejemplar.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Periodista } from "../../periodista/entities/periodista.entity";

@Entity('Revistas')
export class Revista {

    @PrimaryGeneratedColumn()
    regnum:number;

    @Column('text')
    titulo: string;

    @Column('text')
    tipo: string;

    @Column('text')
    periodicidad: string;


    @OneToMany(
        () => Ejemplar,
        (ejemplar) => ejemplar.revistarel,
        { cascade: false  }
    )
    ejemplarrel: Ejemplar[];

    @OneToMany(
        () => Seccion,
        (seccion) => seccion.revistarel,
        { cascade: false }
    )
    seccionrel: Seccion[];

    @ManyToMany(
    () => Periodista,
    (periodista) => periodista.revistarel,
    { cascade: true, eager: true  } )
    // @JoinTable({
    //     name: 'revista_periodista',
    //     joinColumn: {
    //         name: 'revista_id',
    //     },
    //     inverseJoinColumn: {
    //         name: 'periodista_id',
    //     },
    // })
    @JoinTable()
    periodistarel?: Periodista[];
}