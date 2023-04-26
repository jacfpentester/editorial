import { IsDateString, IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEjemplarDto {

    @IsString()
    id: string;

    @IsNumber()
    numejemplares: number; 

    @IsNumber()
    numpaginas: number;

// Retocar para que sea tipo date
    @IsString()
    fecha:string;


    @IsNumber()
    revista_id?: number;
}
