import { Repository } from 'typeorm';
import { CreateTeacherEditionDto } from './dto/create-teacher-edition.dto';
import { UpdateTeacherEditionDto } from './dto/update-teacher-edition.dto';
import { TeacherEdition } from './entities/teacher-edition.entity';
export declare class TeacherEditionService {
    private teacherRepository;
    constructor(teacherRepository: Repository<TeacherEdition>);
    create(createTeacherDto: CreateTeacherEditionDto): Promise<TeacherEdition>;
    findAll(): Promise<TeacherEdition[]>;
    findOne(id: number): Promise<TeacherEdition>;
    update(id: number, updateTeacherDto: UpdateTeacherEditionDto): Promise<TeacherEdition>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
