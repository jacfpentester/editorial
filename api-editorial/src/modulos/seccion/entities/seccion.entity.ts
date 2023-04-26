import { Revista } from "../../revista/entities/revista.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Secciones')
export class Seccion {

    @PrimaryColumn()
    id: string;

    @Column('text')
    titulo: string;

    @Column('text')
    extension: string;

    
    @ManyToOne(
        () => Revista,
        (revista) => revista.seccionrel,
        { cascade: false, nullable: false  }
    )
    @JoinColumn({ name: 'revista_id'
})
    revistarel?: Revista;

}