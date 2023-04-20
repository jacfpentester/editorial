import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRevistaDto {

    @IsNumber()
    regnum:number;
    
    @IsString()
    id: string;

    @IsString()
    titulo:string;

    @IsString()
    tipo:string;

    @IsString()
    periodicidad:string;

}
