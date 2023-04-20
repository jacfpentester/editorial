import { Empleado} from "../../empleado/entities/empleado.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Sucursales')
export class Sucursal {

    @PrimaryGeneratedColumn()
    codigo:string;

    @Column('text')
    direccion: string;

    @Column('text')
    ciudad: string;

    @Column('text')
    provincia: string;

    @Column('text')
    nombre: string;

    @Column('integer')
    telefono: number;

    @OneToMany(
        () => Empleado,
        (Empleado) => Empleado.sucursalrel,
        { cascade: false  }
    )
    empleadorel?: Empleado[];
}