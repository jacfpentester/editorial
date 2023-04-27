import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Empleado} from './entities/empleado.entity';
import { SucursalService } from '../sucursal/sucursal.service';

@Injectable()
export class EmpleadoService {

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
    private readonly sucursalService: SucursalService,
  ) {}

 
  async create(createEmpleadoDto: CreateEmpleadoDto) {
    try {
      const { codigo, ...data } = createEmpleadoDto;
      const empleado = this.empleadoRepository.create({ ...data });
      empleado.sucursalrel = await this.sucursalService.getId(codigo);
      await this.empleadoRepository.save(empleado);
      return empleado
    }catch (error) {
      this.handleDBErrors(error)
    }
  }


  getId(id: string) {
    return this.empleadoRepository.findOne({
      where: { 
        id
      }
    });
  }

  getAll() {
      return this.empleadoRepository.find({});  
    }

  async deleteAllEmpleado() {
    const query = this.empleadoRepository.createQueryBuilder('empleado');

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
