import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublishingHouseDto } from './dto/create-publishing-house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing-house.dto';
import { PublishingHouse } from './entities/publishing-house.entity';

@Injectable()
export class PublishingHouseService {
  constructor(
    @InjectRepository(PublishingHouse)
    private publishingHouseRepository: Repository<PublishingHouse>,
  ) {}

  async create(createPublishingHouseDto: CreatePublishingHouseDto) {
    const faculty = this.publishingHouseRepository.create(
      createPublishingHouseDto,
    );
    await this.publishingHouseRepository.save(createPublishingHouseDto);
    return faculty;
  }

  async findAll() {
    return await this.publishingHouseRepository.find();
  }

  async findOne(id: number) {
    return await this.publishingHouseRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePublishingHouseDto: UpdatePublishingHouseDto) {
    await this.publishingHouseRepository.update(
      { id },
      updatePublishingHouseDto,
    );
    return await this.publishingHouseRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    await this.publishingHouseRepository.delete({ id });
    return { deleted: true };
  }
}
