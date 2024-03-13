import { IsNumberString } from 'class-validator';

class CoordinatesDto {
  @IsNumberString()
  lat: number;

  @IsNumberString()
  lon: number;
}

export class GetTodaySummaryDto extends CoordinatesDto {}

export class GetTodayBannerDto extends CoordinatesDto {}

export class GetHourlyDto extends CoordinatesDto {
  @IsNumberString()
  offset: number;
}
