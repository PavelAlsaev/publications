import { Department } from 'src/department/entities/department.entity';

export class CreateTeacherDto {
  id: number;
  department: Department;
  serviceNumber: string;
  position: string;
  name: string;
  academicRecord: string;
  disciplines: string;
}
