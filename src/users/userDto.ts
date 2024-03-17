import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { SurveyDto } from '@root/surveys/surveyDto';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fcmToken: string;

  @ValidateNested({ each: true })
  @Type(() => SurveyDto)
  survey: SurveyDto;
}

export class UpdateUserTokenDto {
  @IsString()
  @IsNotEmpty()
  fcmToken: string;
}
