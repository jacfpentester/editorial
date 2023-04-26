import { Module } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { SeccionController } from './seccion.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';
import { RevistaModule } from '../revista/revista.module';

@Module({
  controllers: [SeccionController],
  providers: [SeccionService],
  imports: [
    ConfigModule,
    RevistaModule,
    TypeOrmModule.forFeature([Seccion])
  ],
  exports: [ SeccionService,
             TypeOrmModule ]
})
export class SeccionModule {}
