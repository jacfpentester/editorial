import { Module } from '@nestjs/common';
import { PeriodistaService } from './periodista.service';
import { PeriodistaController } from './periodista.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periodista} from './entities/periodista.entity';
import { RevistaModule } from '../revista/revista.module';
import { Revista } from '../revista/entities/revista.entity';

@Module({
  controllers: [PeriodistaController],
  providers: [PeriodistaService],
  imports: [
    ConfigModule,
    RevistaModule,
    TypeOrmModule.forFeature([ Periodista, Revista])
  ],
  exports: [ PeriodistaService,
             TypeOrmModule ]
})
export class PeriodistaModule {}
