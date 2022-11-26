import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherEditionDto } from './create-teacher-edition.dto';

export class UpdateTeacherEditionDto extends PartialType(
  CreateTeacherEditionDto,
) {}
