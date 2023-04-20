import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateSeccionDto {

    @IsString()
    titulo: string;
    
    @IsString()
    extension: string;

 //FK de Revista
    @IsNumber()
    regnum: number;   

}
