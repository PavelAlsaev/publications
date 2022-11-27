import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createTeacherDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateTeacherDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
