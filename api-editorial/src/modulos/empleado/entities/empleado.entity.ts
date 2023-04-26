import { IsNotEmpty } from "class-validator";
import { Sucursal} from "../../sucursal/entities/sucursal.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Empleados')
export class Empleado {

    @PrimaryColumn()
    id:string;

    @Column('text', { unique: true })
    nif: string;

    @Column('text')
    nombre: string;

    @Column('text')
    apellido1: string;

    @Column('text')
    apellido2: string;

    @Column('integer')
    telefono: number;


    @ManyToOne(
        () => Sucursal,
        (Sucursal) => Sucursal.empleadorel,
        { cascade: false, nullable: false  }
    )
    @JoinColumn({ name: 'sucursal_id'})
    sucursalrel: Sucursal;
}