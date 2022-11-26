import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publishingHouse')
export class PublishingHouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  address: string;
}
