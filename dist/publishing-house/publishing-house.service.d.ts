import { Repository } from 'typeorm';
import { CreatePublishingHouseDto } from './dto/create-publishing-house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing-house.dto';
import { PublishingHouse } from './entities/publishing-house.entity';
export declare class PublishingHouseService {
    private publishingHouseRepository;
    constructor(publishingHouseRepository: Repository<PublishingHouse>);
    create(createPublishingHouseDto: CreatePublishingHouseDto): Promise<PublishingHouse>;
    findAll(): Promise<PublishingHouse[]>;
    findOne(id: number): Promise<PublishingHouse>;
    update(id: number, updatePublishingHouseDto: UpdatePublishingHouseDto): Promise<PublishingHouse>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
