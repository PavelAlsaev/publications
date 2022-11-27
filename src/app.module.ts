import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyModule } from './faculty/faculty.module';
import { DepartmentModule } from './department/department.module';
import { TeacherModule } from './teacher/teacher.module';
import { PublishingHouseModule } from './publishing-house/publishing-house.module';
import { EditionModule } from './edition/edition.module';
import { TeacherEditionModule } from './teacher-edition/teacher-edition.module';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    FacultyModule,
    DepartmentModule,
    TeacherModule,
    PublishingHouseModule,
    EditionModule,
    TeacherEditionModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
