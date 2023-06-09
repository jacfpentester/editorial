import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seccion} from './entities/seccion.entity';
import { RevistaService } from '../revista/revista.service';

@Injectable()
export class SeccionService {

  constructor(
    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>,
    private readonly revistaService: RevistaService,
  ) {}

 
  async create(createSeccionDto: CreateSeccionDto) {
    try {
      const { revista_id, ...campos } = createSeccionDto; 
      const seccion = this.seccionRepository.create({ ...campos});
      seccion.revistarel = await this.revistaService.findOne(revista_id);
      await this.seccionRepository.save(seccion);
      return seccion;
      
    }catch (error) {
      this.handleDBErrors(error)
    }
  }


  getId(id: string) {
    return this.seccionRepository.findOne({
      where: { 
        id
      }
    });
  }

  getAll() {
      return this.seccionRepository.find({});  
    }

  async deleteAllSeccion() {
    const query = this.seccionRepository.createQueryBuilder('seccion');

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
