import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { SurveyDto } from './surveyDto';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private surveysRepository: Repository<Survey>,
  ) {}

  async updateSurvey(userId: number, newSurvey: SurveyDto) {
    const survey = await this.surveysRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!survey) {
      throw new NotFoundException('User not found');
    }

    return await this.surveysRepository.save({ ...newSurvey, id: survey.id });
  }
}
