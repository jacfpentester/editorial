import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sucursal} from './entities/sucursal.entity';

@Injectable()
export class SucursalService {

  constructor(
    @InjectRepository(Sucursal)
    private readonly sucursalRepository: Repository<Sucursal>,
  ) {}

  async create(createSucursalDto: CreateSucursalDto) {
    try {
      const sucursal = this.sucursalRepository.create(createSucursalDto);
      await this.sucursalRepository.save(sucursal);
      return (sucursal);
      
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error!')
    }
  }

  getId(codigo: string) {
    return this.sucursalRepository.findOne({
      where: { 
        codigo
    },
     });
  
  }

  getAll() {
      return this.sucursalRepository.find({});  
    }

  async deleteAllEmpleado() {
    const query = this.sucursalRepository.createQueryBuilder('sucursal');

    try {
      return await query
        .delete()
        .where({})
        .execute();

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

   private handleDBErrors (error: any): never{
   if (error.code === '23505')
     throw new BadRequestException(error.detail)
  
   throw new InternalServerErrorException('Please Check Server Error ...')
 }
}
