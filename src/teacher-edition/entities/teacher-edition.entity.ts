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

  @ManyToOne(() => Teacher, { onDelete: 'CASCADE' })
  @JoinTable()
  teacher: Teacher;

  @ManyToOne(() => Edition, { onDelete: 'CASCADE' })
  @JoinTable()
  edition: Edition;

  @Column()
  contribution: string;
}
