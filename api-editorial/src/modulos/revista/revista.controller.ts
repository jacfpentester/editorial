import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevistaService } from './revista.service';
import { CreateRevistaDto } from './dto/create-revista.dto';
import { UpdateRevistaDto } from './dto/update-revista.dto';

@Controller('revista')
export class RevistaController {
  constructor(private readonly revistaService: RevistaService) {}

  @Post('nueva')
  create(@Body() createRevistaDto: CreateRevistaDto) {
    return this.revistaService.create(createRevistaDto);
  }

  @Get('listartodo')
  findAll() {
    return this.revistaService.getAll();
  }
}
