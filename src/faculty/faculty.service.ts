import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty)
    private facultyRepository: Repository<Faculty>,
  ) {}

  async create(createFacultyDto: CreateFacultyDto) {
    const faculty = this.facultyRepository.create(createFacultyDto);
    await this.facultyRepository.save(createFacultyDto);
    return faculty;
  }

  async findAll() {
    return await this.facultyRepository.find();
  }

  async findOne(id: number) {
    return await this.facultyRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateFacultyDto: UpdateFacultyDto) {
    await this.facultyRepository.update({ id }, updateFacultyDto);
    return await this.facultyRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    await this.facultyRepository.delete({ id });
    return { deleted: true };
  }
}
