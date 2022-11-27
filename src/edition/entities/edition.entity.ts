import { Cipher } from 'crypto';
import { PublishingHouse } from 'src/publishing-house/entities/publishing-house.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('edition')
export class Edition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PublishingHouse)
  @JoinTable()
  publishingHouse: PublishingHouse;

  @Column({ unique: true })
  udc: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  autor: string;

  @Column({ type: 'integer' })
  countOfPages: number;

  @Column({ type: 'integer' })
  countOfTables: number;

  @Column({ type: 'integer' })
  countOfDrawnings: number;

  @Column({ type: 'integer' })
  year: number;

  @Column()
  annotationArticle: string;

  @Column()
  annotationThesis: string;

  @Column({ type: 'integer' })
  yearOfPublicationAnnotation: number;

  @Column()
  subject: string;

  @Column()
  nameAnnotation: string;
}
