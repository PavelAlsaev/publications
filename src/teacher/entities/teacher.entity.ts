import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('teacher')
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Department, { onDelete: 'CASCADE' })
  @JoinTable()
  department: Department;

  @Column({ unique: true })
  serviceNumber: string;

  @Column()
  position: string;

  @Column()
  name: string;

  @Column()
  academicRecord: string;

  @Column()
  disciplines: string;
}
