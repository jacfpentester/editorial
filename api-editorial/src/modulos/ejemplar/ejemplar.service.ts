import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateEjemplarDto } from './dto/create-ejemplar.dto';
import { UpdateEjemplarDto } from './dto/update-ejemplar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ejemplar} from './entities/ejemplar.entity';
import { RevistaService } from '../revista/revista.service';

@Injectable()
export class EjemplarService {

  constructor(
    @InjectRepository(Ejemplar)
    private readonly ejemplarRepository: Repository<Ejemplar>,
    private readonly revistaService: RevistaService,
  ) {}

 
  async create(createEjemplarDto: CreateEjemplarDto) {
    try { 
      const { revista_id, ...campos } = createEjemplarDto; 
      const ejemplar = this.ejemplarRepository.create({ ...campos});
      ejemplar.revistarel = await this.revistaService.findOne(revista_id);
      await this.ejemplarRepository.save(ejemplar);
      return ejemplar;
      
    }catch (error) {
      this.handleDBErrors(error)
    }
  }


  getId(id: string) {
    return this.ejemplarRepository.findOne({
      where: { 
        id
      }
    });
  }

  getAll() {
      return this.ejemplarRepository.find({});  
    }

  async deleteAllEjemplar() {
    const query = this.ejemplarRepository.createQueryBuilder('ejemplar');

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
