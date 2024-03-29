import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

import { TimePeriod } from '@root/surveys/constants';

export class SurveyDto {
  @IsNumber()
  @Max(1439)
  @Min(1)
  alertBeforeRain: number;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  timePeriods: TimePeriod[];

  @IsNumber()
  summaryAlertTime: number;
}
