import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';

@Controller('sucursal')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}

  @Post('nueva')
  create(@Body() createSucursalDto: CreateSucursalDto) {
    return this.sucursalService.create(createSucursalDto);
  }

  @Get('listartodo')
  findAll() {
    return this.sucursalService.getAll();
  }
}
