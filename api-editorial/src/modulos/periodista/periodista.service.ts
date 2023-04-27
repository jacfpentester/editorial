import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePeriodistaDto } from './dto/create-periodista.dto';
import { UpdatePeriodistaDto } from './dto/update-periodista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Periodista} from './entities/periodista.entity';
import { RevistaService } from '../revista/revista.service';

@Injectable()
export class PeriodistaService {

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Periodista)
    private readonly periodistaRepository: Repository<Periodista>,
    private readonly revistaService: RevistaService,
  ) {}

 
  async create(createPeriodistaDto: CreatePeriodistaDto) {
    try {
      const { ...data } = createPeriodistaDto;
      const periodista = this.periodistaRepository.create({ ...data });
      //periodista.id = await this.revistaService.getRevistaId(id);
      await this.periodistaRepository.save(periodista);
      return (periodista);
      // const periodista = this.periodistaRepository.create(createPeriodistaDto);
      // await this.periodistaRepository.save(periodista);
      // return (periodista);
    }catch (error) {
      this.handleDBErrors(error)
    }
  }


  getId(id: number) {
    return this.periodistaRepository.findOne({
      where: { 
        id
      }
    });
  }

  getAll() {
      return this.periodistaRepository.find({});  
    }

  async deleteAllPeriodista() {
    const query = this.periodistaRepository.createQueryBuilder('periodista');

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
