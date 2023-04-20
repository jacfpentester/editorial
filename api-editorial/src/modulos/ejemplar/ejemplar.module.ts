import { Module } from '@nestjs/common';
import { EjemplarService } from './ejemplar.service';
import { EjemplarController } from './ejemplar.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ejemplar } from './entities/ejemplar.entity';
import { RevistaModule } from '../revista/revista.module';

@Module({
  controllers: [EjemplarController],
  providers: [EjemplarService],
  imports: [
    ConfigModule,
    RevistaModule,
    TypeOrmModule.forFeature([ Ejemplar])
  ],
  exports: [ EjemplarService,
             TypeOrmModule ]
})
export class EjemplarModule {}
