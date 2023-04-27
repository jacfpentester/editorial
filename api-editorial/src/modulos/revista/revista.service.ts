import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRevistaDto } from './dto/create-revista.dto';
import { UpdateRevistaDto } from './dto/update-revista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Revista} from './entities/revista.entity';
import { Periodista } from '../periodista/entities/periodista.entity';
import { SeccionService } from '../seccion/seccion.service';
import { EjemplarService } from '../ejemplar/ejemplar.service';
import { PeriodistaService } from '../periodista/periodista.service';

@Injectable()
export class RevistaService {

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Revista)
    private readonly revistaRepository: Repository<Revista>,
    private readonly periodistaService: PeriodistaService,
    ) {}

  async create(createRevistaDto: CreateRevistaDto) {
    try {
      const {  periodista_id, ...campos } = createRevistaDto;
      const revista = this.revistaRepository.create({ ...campos });
            revista.periodistarel = await this.periodistaService.getId(periodista_id);
            await this.revistaRepository.save(revista);
      await this.revistaRepository.save(revista);
      return (revista);
      
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error!')
    }
  }

  findOne(id: number) {
    return this.revistaRepository.findOne({
      where: { 
        id
      },
      relations: {
          seccionrel: true,
          ejemplarrel: true,
          periodistarel: true,
      }
    });
  }

  getId(id: number) {
    return this.revistaRepository.findOne({
      where: { 
        id
    },
     });
  
  }

  getRevistaId(id: number) {
    return this.revistaRepository.findOne({
      where: { 
        id
    },
     });
  
  }

  getAll() {
      return this.revistaRepository.find({});  
    }

  async deleteAllRevistas() {
    const query = this.revistaRepository.createQueryBuilder('revista');

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
