import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherEditionService } from './teacher-edition.service';
import { CreateTeacherEditionDto } from './dto/create-teacher-edition.dto';
import { UpdateTeacherEditionDto } from './dto/update-teacher-edition.dto';

@Controller('teacher-edition')
export class TeacherEditionController {
  constructor(private readonly teacherEditionService: TeacherEditionService) {}

  @Post()
  create(@Body() createTeacherEditionDto: CreateTeacherEditionDto) {
    return this.teacherEditionService.create(createTeacherEditionDto);
  }

  @Get()
  findAll() {
    return this.teacherEditionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherEditionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeacherEditionDto: UpdateTeacherEditionDto,
  ) {
    return this.teacherEditionService.update(+id, updateTeacherEditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherEditionService.remove(+id);
  }
}
