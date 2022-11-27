import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
export declare class TeacherService {
    private teacherRepository;
    constructor(teacherRepository: Repository<Teacher>);
    create(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    findOne(id: number): Promise<Teacher>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<Teacher>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
