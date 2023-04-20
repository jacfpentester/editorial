import { IsDateString, IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEjemplarDto {

    @IsString()
    id: string;

//FK de Revista
    @IsNumber()
    regnum: number;
    
    @IsNumber()
    numpaginas: number;

    @IsNumber()
    numejemplares: number;

// Retocar para que sea tipo date
    @IsString()
    fecha:string;
}
