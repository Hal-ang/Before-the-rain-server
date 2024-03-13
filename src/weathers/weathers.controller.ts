import { Controller, Get, Param, Query, Res } from '@nestjs/common';

import { WeathersService } from './weathers.service';

import {
  GetHourlyDto,
  GetTodayBannerDto,
  GetTodaySummaryDto,
} from '@root/dto/weatherDto';
import { TodaySummaryType } from './wathers.type';

@Controller('weathers')
export class WeathersController {
  constructor(private readonly weathersService: WeathersService) {}

  // TODO : DTO 변경하기
  @Get('today/summary')
  getTodaySummary(
    @Query() { lat, lon }: { lat?: string; lon?: string },
  ): Promise<TodaySummaryType> {
    if (!lon || !lat) {
      // return 'failed';
    }
    return this.weathersService.getTodaySummary(Number(lat), Number(lon));
  }

  @Get('today/banner')
  getTodayBanner(@Query() { lat, lon }: GetTodayBannerDto) {
    return `${lat} ${lon}`;
  }

  @Get('hourly')
  getHourly(
    @Query()
    { lat, lon, offset = 24 }: GetHourlyDto,
  ) {
    return `${lat} ${lon} ${offset}`;
  }
}
