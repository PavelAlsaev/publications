import { PublishingHouseService } from './publishing-house.service';
import { CreatePublishingHouseDto } from './dto/create-publishing-house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing-house.dto';
export declare class PublishingHouseController {
    private readonly publishingHouseService;
    constructor(publishingHouseService: PublishingHouseService);
    create(createPublishingHouseDto: CreatePublishingHouseDto): Promise<import("./entities/publishing-house.entity").PublishingHouse>;
    findAll(): Promise<import("./entities/publishing-house.entity").PublishingHouse[]>;
    findOne(id: string): Promise<import("./entities/publishing-house.entity").PublishingHouse>;
    update(id: string, updatePublishingHouseDto: UpdatePublishingHouseDto): Promise<import("./entities/publishing-house.entity").PublishingHouse>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
