import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { SucursalModule } from '../sucursal/sucursal.module';

@Module({
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
  imports: [
    ConfigModule,
    SucursalModule,
    TypeOrmModule.forFeature([ Empleado])
  ],
  exports: [ EmpleadoService,
             TypeOrmModule ]
})
export class EmpleadoModule {}
