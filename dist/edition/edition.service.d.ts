import { Repository } from 'typeorm';
import { CreateEditionDto } from './dto/create-edition.dto';
import { UpdateEditionDto } from './dto/update-edition.dto';
import { Edition } from './entities/edition.entity';
export declare class EditionService {
    private editionRepository;
    constructor(editionRepository: Repository<Edition>);
    create(createEditionDto: CreateEditionDto): Promise<Edition>;
    findAll(): Promise<Edition[]>;
    findOne(id: number): Promise<Edition>;
    update(id: number, updateEditionDto: UpdateEditionDto): Promise<Edition>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
