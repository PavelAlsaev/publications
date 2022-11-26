import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createTeacherDto: CreateUserDto) {
    const teacher = this.userRepository.create(createTeacherDto);
    await this.userRepository.save(createTeacherDto);
    return teacher;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateTeacherDto: UpdateUserDto) {
    await this.userRepository.update({ id }, updateTeacherDto);
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {
    await this.userRepository.delete({ id });
    return { deleted: true };
  }
}
