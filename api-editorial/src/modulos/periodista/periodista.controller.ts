import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeriodistaService } from './periodista.service';
import { CreatePeriodistaDto } from './dto/create-periodista.dto';
import { UpdatePeriodistaDto } from './dto/update-periodista.dto';

@Controller('periodista')
export class PeriodistaController {
  constructor(private readonly periodistaService: PeriodistaService) {}

  @Post('nuevo')
  create(@Body() createPeriodistaDto: CreatePeriodistaDto) {
    return this.periodistaService.create(createPeriodistaDto);
  }

  @Get('listartodo')
  findAll() {
    return this.periodistaService.getAll();
  }
}
