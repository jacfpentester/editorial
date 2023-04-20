import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjemplarService } from './ejemplar.service';
import { CreateEjemplarDto } from './dto/create-ejemplar.dto';
import { UpdateEjemplarDto } from './dto/update-ejemplar.dto';

@Controller('ejemplar')
export class EjemplarController {
  constructor(private readonly ejemplarService: EjemplarService) {}

  @Post('nuevo')
  create(@Body() createEjemplarDto: CreateEjemplarDto) {
    return this.ejemplarService.create(createEjemplarDto);
  }

  @Get('listartodo')
  findAll() {
    return this.ejemplarService.getAll();
  }
}
