import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sucursal } from './entities/sucursal.entity';

@Module({
  controllers: [SucursalController],
  providers: [SucursalService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([ Sucursal ])
  ],
  exports: [ SucursalService,
             TypeOrmModule ]
})
export class SucursalModule {}
