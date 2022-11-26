import { Edition } from 'src/edition/entities/edition.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';

export class CreateTeacherEditionDto {
  id: number;
  teacher: Teacher;
  edition: Edition;
  contribution: string;
}
