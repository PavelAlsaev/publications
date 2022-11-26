import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyModule } from './faculty/faculty.module';
import { DepartmentModule } from './department/department.module';
import { TeacherModule } from './teacher/teacher.module';
import { PublishingHouseModule } from './publishing-house/publishing-house.module';
import { EditionModule } from './edition/edition.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'adminadmin',
      database: 'Publications',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FacultyModule,
    DepartmentModule,
    TeacherModule,
    PublishingHouseModule,
    EditionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
