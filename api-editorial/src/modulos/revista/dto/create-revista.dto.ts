import { IsArray, IsIn, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRevistaDto {

     @IsNumber()
     regnum:number;
    
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    periodistarel?: string[];

    // @IsArray()
    // @IsString({ each: true })
    // @IsOptional()
    // seccionrel?: string[];

    // @IsArray()
    // @IsString({ each: true })
    // @IsOptional()
    // ejemplarrel?: string[];

    @IsString()
    titulo:string;
    
    @IsString()
    tipo:string;

    @IsString()
    periodicidad:string;  

    
    // @IsString()
    // seccionID?: string;

    // @IsString()
    // ejemplarID?: string;

  


}
