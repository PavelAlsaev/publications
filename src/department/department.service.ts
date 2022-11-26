import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentRepository.create(createDepartmentDto);
    await this.departmentRepository.save(createDepartmentDto);
    return department;
  }

  async findAll() {
    return await this.departmentRepository.find({
      relations: ['faculty'],
    });
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOne({
      where: { id },
      relations: ['faculty'],
    });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    await this.departmentRepository.update({ id }, updateDepartmentDto);
    return await this.departmentRepository.findOne({
      where: { id },
      relations: ['faculty'],
    });
  }

  async remove(id: number) {
    await this.departmentRepository.delete({ id });
    return { deleted: true };
  }
}
