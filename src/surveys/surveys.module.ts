import { Module } from '@nestjs/common';
import { Survey } from './survey.entity';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  providers: [SurveysService],
  controllers: [SurveysController],
})
export class SurveysModule {}
