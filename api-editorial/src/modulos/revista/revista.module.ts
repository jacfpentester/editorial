import { Module } from '@nestjs/common';
import { RevistaService } from './revista.service';
import { RevistaController } from './revista.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Revista } from './entities/revista.entity';
import { Periodista } from '../periodista/entities/periodista.entity';

@Module({
  controllers: [RevistaController],
  providers: [RevistaService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([ Revista, Periodista ])
  ],
  exports: [ RevistaService,
             TypeOrmModule ]
})
export class RevistaModule {}