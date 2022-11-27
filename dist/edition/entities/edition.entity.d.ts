import { PublishingHouse } from 'src/publishing-house/entities/publishing-house.entity';
export declare class Edition {
    id: number;
    publishingHouse: PublishingHouse;
    udc: string;
    name: string;
    type: string;
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
