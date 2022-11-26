import { Faculty } from 'src/faculty/entities/faculty.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Faculty)
  @JoinTable()
  faculty: Faculty;

  @Column({ unique: false })
  name: string;
}
