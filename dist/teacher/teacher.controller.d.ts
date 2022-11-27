import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    create(createTeacherDto: CreateTeacherDto): Promise<import("./entities/teacher.entity").Teacher>;
    findAll(): Promise<import("./entities/teacher.entity").Teacher[]>;
    findOne(id: string): Promise<import("./entities/teacher.entity").Teacher>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("./entities/teacher.entity").Teacher>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
