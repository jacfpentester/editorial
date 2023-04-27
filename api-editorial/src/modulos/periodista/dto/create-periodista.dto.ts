import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePeriodistaDto {

    @IsNumber()
    id:number;
    
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

    @IsNumber()
    revista_id:number;
 
}
