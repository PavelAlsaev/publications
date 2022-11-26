import { PublishingHouse } from 'src/publishing-house/entities/publishing-house.entity';

export class CreateEditionDto {
  id: number;
  publishingHouse: PublishingHouse;
  udc: string;
  autor: string;
  countOfPages: number;
  countOfTables: number;
  countOfDrawnings: number;
  year: number;
  annotationArticle: string;
  annotationThesis: string;
  yearOfPublicationAnnotation: number;
  subject: string;
  nameAnnotation: string;
}
