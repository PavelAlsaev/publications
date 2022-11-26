import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const teacher = this.teacherRepository.create(createTeacherDto);
    await this.teacherRepository.save(createTeacherDto);
    return teacher;
  }

  async findAll() {
    return await this.teacherRepository.find({
      relations: ['department', 'department.faculty'],
    });
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOne({
      where: { id },
      relations: ['department', 'department.faculty'],
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    await this.teacherRepository.update({ id }, updateTeacherDto);
    return await this.teacherRepository.findOne({
      where: { id },
      relations: ['department', 'department.faculty'],
    });
  }

  async remove(id: number) {
    await this.teacherRepository.delete({ id });
    return { deleted: true };
  }
}
