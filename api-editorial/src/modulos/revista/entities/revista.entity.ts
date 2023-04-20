import { Seccion } from "../../seccion/entities/seccion.entity";
import { Ejemplar} from "../../ejemplar/entities/ejemplar.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Periodista } from "../../periodista/entities/periodista.entity";

@Entity('Revistas')
export class Revista {

    @PrimaryColumn()
    regnum:number;

    @Column('text')
    titulo: string;

    @Column('text')
    tipo: string;

    @Column('text')
    periodicidad: string;


    @OneToMany(
        () => Ejemplar,
        (Ejemplar) => Ejemplar.revistarel,
        { cascade: true  }
    )
    ejemplarrel?: Ejemplar[];

    @OneToMany(
        () => Seccion,
        (Seccion) => Seccion.revistarel,
        { cascade: true  }
    )
    seccionrel?: Seccion[];

    @ManyToMany(
    () => Periodista,
    (periodista) => periodista.revistarel)
    @JoinTable({
        name: 'revista_periodista',
        joinColumn: {
            name: 'revista_id',
        },
        inverseJoinColumn: {
            name: 'periodista_id',
        },
    })
    periodistarel: Periodista[];
}