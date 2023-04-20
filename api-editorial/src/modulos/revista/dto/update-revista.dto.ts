import { PartialType } from '@nestjs/mapped-types';
import { CreateRevistaDto } from './create-revista.dto';

export class UpdateRevistaDto extends PartialType(CreateRevistaDto) {}
