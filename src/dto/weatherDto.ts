import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class CoordinatesDto {
  @IsInt()
  @Type(() => Number)
  lat: number;

  @IsInt()
  @Type(() => Number)
  lon: number;
}

export class GetTodaySummaryDto extends CoordinatesDto {}

export class GetTodayBannerDto extends CoordinatesDto {}

export class GetHourlyDto extends CoordinatesDto {
  @IsInt()
  @Type(() => Number)
  offset: number;
}
