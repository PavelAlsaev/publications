import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherEditionDto } from './dto/create-teacher-edition.dto';
import { UpdateTeacherEditionDto } from './dto/update-teacher-edition.dto';
import { TeacherEdition } from './entities/teacher-edition.entity';

@Injectable()
export class TeacherEditionService {
  constructor(
    @InjectRepository(TeacherEdition)
    private teacherRepository: Repository<TeacherEdition>,
  ) {}

  async create(createTeacherDto: CreateTeacherEditionDto) {
    let teacher = this.teacherRepository.create(createTeacherDto);
    teacher = await this.teacherRepository.save(createTeacherDto);
    return teacher;
  }

  async findAll() {
    return await this.teacherRepository.find({
      relations: ['teacher', 'teacher.department', 'edition'],
    });
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOne({
      where: { id },
      relations: ['teacher', 'teacher.department', 'edition'],
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherEditionDto) {
    await this.teacherRepository.update({ id }, updateTeacherDto);
    return await this.teacherRepository.findOne({
      where: { id },
      relations: ['teacher', 'teacher.department', 'edition'],
    });
  }

  async remove(id: number) {
    await this.teacherRepository.delete({ id });
    return { deleted: true };
  }
}
