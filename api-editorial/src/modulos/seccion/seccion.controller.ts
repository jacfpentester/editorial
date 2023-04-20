import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';

@Controller('seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Post('nuevo')
  create(@Body() createSeccionDto: CreateSeccionDto) {
    return this.seccionService.create(createSeccionDto);
  }

  @Get('listartodo')
  findAll() {
    return this.seccionService.getAll();
  }
}
