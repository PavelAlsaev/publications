import { CreateDepartmentDto } from 'src/department/dto/create-department.dto';

export class CreateTeacherDto {
  id: number;
  department: CreateDepartmentDto;
  serviceNumber: string;
  position: string;
  name: string;
  academicRecord: string;
  disciplines: string;
}
