import { CreateFacultyDto } from 'src/faculty/dto/create-faculty.dto';
export declare class CreateDepartmentDto {
    id: number;
    name: string;
    faculty: CreateFacultyDto;
}
