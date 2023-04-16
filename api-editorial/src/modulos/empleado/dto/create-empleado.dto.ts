import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEmpleadoDto {

    @IsString()
    id: string;
    
    @IsString()
    codigo: string;

    @IsString()
    nif:string;

    @IsString()
    nombre:string;

    @IsString()
    apellido1:string;

    @IsString()
    apellido2:string;

    @IsNumber()
    telefono:number;
}
