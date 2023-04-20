import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRevistaDto } from './dto/create-revista.dto';
import { UpdateRevistaDto } from './dto/update-revista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revista} from './entities/revista.entity';

@Injectable()
export class RevistaService {

  constructor(
    @InjectRepository(Revista)
    private readonly revistaRepository: Repository<Revista>,
  ) {}

  async create(createRevistaDto: CreateRevistaDto) {
    try {
      const revista = this.revistaRepository.create(createRevistaDto);
      await this.revistaRepository.save(revista);
      return (revista);
      
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error!')
    }
  }

  getId(regnum: number) {
    return this.revistaRepository.findOne({
      where: { 
        regnum
    },
     });
  
  }

  getRevistaId(regnum: number) {
    return this.revistaRepository.findOne({
      where: { 
        regnum
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
