import { Revista } from "../../revista/entities/revista.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Ejemplares')
export class Ejemplar {


    @PrimaryColumn()
    id:string;

    @Column('integer')
    numejemplares: number;

    @Column('integer')
    numpaginas: number;

    @Column('text')
    fecha: string;   

    @ManyToOne(
        () => Revista,
        (revista) => revista.ejemplarrel,
        { cascade: false, nullable: false  }
        )
        @JoinColumn({ name: 'revista_id'})
        revistarel?: Revista;
  //ejemplar: Revista;

}