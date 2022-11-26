import { Module } from '@nestjs/common';
import { PublishingHouseService } from './publishing-house.service';
import { PublishingHouseController } from './publishing-house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublishingHouse } from './entities/publishing-house.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublishingHouse])],
  controllers: [PublishingHouseController],
  providers: [PublishingHouseService],
})
export class PublishingHouseModule {}
