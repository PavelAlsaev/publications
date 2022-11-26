import { Module } from '@nestjs/common';
import { TeacherEditionService } from './teacher-edition.service';
import { TeacherEditionController } from './teacher-edition.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherEdition } from './entities/teacher-edition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherEdition])],
  controllers: [TeacherEditionController],
  providers: [TeacherEditionService],
})
export class TeacherEditionModule {}
