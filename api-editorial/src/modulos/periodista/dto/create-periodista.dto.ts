import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePeriodistaDto {

    @IsString()
    id: string;
    
    @IsString()
    especialidad:string;

    @IsString()
    nombre:string;

    @IsString()
    apellido1:string;

    @IsString()
    apellido2:string;

    @IsNumber()
    telefono:number;
 
}
