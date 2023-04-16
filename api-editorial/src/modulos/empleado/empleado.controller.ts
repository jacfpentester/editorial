import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post('nuevo')
  create(@Body() createAparatoDto: CreateEmpleadoDto) {
    return this.empleadoService.create(createAparatoDto);
  }

  @Get('listartodo')
  findAll() {
    return this.empleadoService.getAll();
  }
}
