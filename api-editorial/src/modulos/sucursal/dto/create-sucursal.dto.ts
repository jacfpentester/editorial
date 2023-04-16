import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateSucursalDto {

    @IsString()
    codigo: string;

    @IsString()
    direccion:string;

    @IsNumber()
    telefono:number;

    @IsString()
    nombre:string;

    @IsString()
    ciudad:string;

    @IsString() // Álava,Albacete,Alicante,Almería,Asturias,Ávila,Badajoz,Barcelona,Burgos,Cáceres,Cádiz,Cantabria,Castellón,Ceuta,Ciudad Real,Córdoba,Cuenca,Girona,Las Palmas,Granada,Guadalajara,Guipúzcoa,Huelva,Huesca,Illes Balears,Jaén,A Coruña,La Rioja,León,Lleida,Lugo,Madrid,Málaga,Melilla,Murcia,Navarra,Ourense,Palencia,Pontevedra,Salamanca,Segovia,Sevilla,Soria,Tarragona,Santa Cruz de Tenerife,Teruel,Toledo,Valencia,Valéncia,Valladolid,Vizcaya,Zamora,Zaragoza
    provincia:string;
}
