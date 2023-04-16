import { Empleado} from "../../empleado/entities/empleado.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Sucursales')
export class Sucursal {

    @PrimaryColumn()
    codigo:string;

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
        () => Empleado,
        (Empleado) => Empleado.sucursalrel,
        { cascade: false  }
    )
    empleadorel?: Empleado;
}