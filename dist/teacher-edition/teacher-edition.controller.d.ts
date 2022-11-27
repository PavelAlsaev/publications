import { TeacherEditionService } from './teacher-edition.service';
import { CreateTeacherEditionDto } from './dto/create-teacher-edition.dto';
import { UpdateTeacherEditionDto } from './dto/update-teacher-edition.dto';
export declare class TeacherEditionController {
    private readonly teacherEditionService;
    constructor(teacherEditionService: TeacherEditionService);
    create(createTeacherEditionDto: CreateTeacherEditionDto): Promise<import("./entities/teacher-edition.entity").TeacherEdition>;
    findAll(): Promise<import("./entities/teacher-edition.entity").TeacherEdition[]>;
    findOne(id: string): Promise<import("./entities/teacher-edition.entity").TeacherEdition>;
    update(id: string, updateTeacherEditionDto: UpdateTeacherEditionDto): Promise<import("./entities/teacher-edition.entity").TeacherEdition>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
