import { PartialType } from '@nestjs/mapped-types';
import { CreatePeriodistaDto } from './create-periodista.dto';

export class UpdatePeriodistaDto extends PartialType(CreatePeriodistaDto) {}
