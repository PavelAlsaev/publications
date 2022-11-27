import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';
export declare class FacultyService {
    private facultyRepository;
    constructor(facultyRepository: Repository<Faculty>);
    create(createFacultyDto: CreateFacultyDto): Promise<Faculty>;
    findAll(): Promise<Faculty[]>;
    findOne(id: number): Promise<Faculty>;
    update(id: number, updateFacultyDto: UpdateFacultyDto): Promise<Faculty>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
