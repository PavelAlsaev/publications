import { Edition } from 'src/edition/entities/edition.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('teacherEdition')
export class TeacherEdition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Teacher)
  @JoinTable()
  teacher: Teacher;

  @ManyToOne(() => Edition)
  @JoinTable()
  edition: Edition;

  @Column()
  contribution: string;
}
