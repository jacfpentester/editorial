import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoModule } from './modulos/empleado/empleado.module';
import { SucursalModule } from './modulos/sucursal/sucursal.module';
import { EjemplarModule } from './modulos/ejemplar/ejemplar.module';
import { RevistaModule } from './modulos/revista/revista.module';
import { SeccionModule } from './modulos/seccion/seccion.module';
import { PeriodistaModule } from './modulos/periodista/periodista.module';
@Module({ 
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
     type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
  }),
  EmpleadoModule,
  SucursalModule,
  EjemplarModule,
  SeccionModule,
  RevistaModule,
  //PeriodistaModule,
  ]
})
export class AppModule {}

