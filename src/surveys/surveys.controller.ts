import { Body, Controller, NotFoundException, Put, Req } from '@nestjs/common';
import { SurveysService } from './surveys.service';
import { SurveyDto } from './surveyDto';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @Put()
  updateSurvey(@Req() { headers }: Request, @Body() updateSurvey: SurveyDto) {
    const userId = headers['authorization'];
    if (!userId) {
      throw new NotFoundException('Authorization header not found');
    }

    return this.surveysService.updateSurvey(userId, updateSurvey);
  }
}
