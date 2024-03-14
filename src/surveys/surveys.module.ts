import { Module } from '@nestjs/common';
import { Survey } from './survey.entity';
import { SurveysService } from './surveys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveysController } from './surveys.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  providers: [SurveysService],
  controllers: [SurveysController],
})
export class SurveysModule {}
