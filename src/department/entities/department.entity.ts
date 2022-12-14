import { Faculty } from 'src/faculty/entities/faculty.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Faculty, { onDelete: 'CASCADE' })
  @JoinTable()
  faculty: Faculty;

  @Column({ unique: false })
  name: string;
}
