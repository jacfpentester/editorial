import { Module } from '@nestjs/common';
import { RevistaService } from './revista.service';
import { RevistaController } from './revista.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revista } from './entities/revista.entity';
import { Periodista } from '../periodista/entities/periodista.entity';
import { SeccionModule } from '../seccion/seccion.module';
import { EjemplarModule } from '../ejemplar/ejemplar.module';
import { Seccion } from '../seccion/entities/seccion.entity';
import { Ejemplar } from '../ejemplar/entities/ejemplar.entity';

@Module({
  controllers: [RevistaController],
  providers: [RevistaService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Revista])
  ],
  exports: [ RevistaService,
              TypeOrmModule ]
})
export class RevistaModule {}
