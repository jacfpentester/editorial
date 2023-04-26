import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateSeccionDto {

    @IsString()
    id: string;

    @IsString()
    titulo: string;
    
    @IsString()
    extension: string;
    
    @IsNumber()  
    @IsOptional()
    revista_id?: number;
//  //FK de Revista
//     @IsNumber()
//     regnum: number;   

}
