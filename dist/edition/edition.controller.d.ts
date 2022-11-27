import { EditionService } from './edition.service';
import { CreateEditionDto } from './dto/create-edition.dto';
import { UpdateEditionDto } from './dto/update-edition.dto';
export declare class EditionController {
    private readonly editionService;
    constructor(editionService: EditionService);
    create(createEditionDto: CreateEditionDto): Promise<import("./entities/edition.entity").Edition>;
    findAll(): Promise<import("./entities/edition.entity").Edition[]>;
    findOne(id: string): Promise<import("./entities/edition.entity").Edition>;
    update(id: string, updateEditionDto: UpdateEditionDto): Promise<import("./entities/edition.entity").Edition>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
