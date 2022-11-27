import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEditionDto } from './dto/create-edition.dto';
import { UpdateEditionDto } from './dto/update-edition.dto';
import { Edition } from './entities/edition.entity';

@Injectable()
export class EditionService {
  constructor(
    @InjectRepository(Edition)
    private editionRepository: Repository<Edition>,
  ) {}

  async create(createEditionDto: CreateEditionDto) {
    let edition = this.editionRepository.create(createEditionDto);
    edition = await this.editionRepository.save(createEditionDto);
    return edition;
  }

  async findAll() {
    return await this.editionRepository.find({
      relations: ['publishingHouse'],
    });
  }

  async findOne(id: number) {
    return await this.editionRepository.findOne({
      where: { id },
      relations: ['publishingHouse'],
    });
  }

  async update(id: number, updateEditionDto: UpdateEditionDto) {
    await this.editionRepository.update({ id }, updateEditionDto);
    return await this.editionRepository.findOne({
      where: { id },
      relations: ['publishingHouse'],
    });
  }

  async remove(id: number) {
    await this.editionRepository.delete({ id });
    return { deleted: true };
  }
}
