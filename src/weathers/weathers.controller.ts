import {
  BadRequestException,
  Controller,
  Get,
  Head,
  Query,
  Req,
} from '@nestjs/common';

import { WeathersService } from './weathers.service';

import { TodaySummaryResponse } from './weathers.type';

@Controller('weathers')
export class WeathersController {
  constructor(private readonly weathersService: WeathersService) {}

  @Get('today/summary')
  getTodaySummary(
    @Query() { lat, lon }: { lat?: string; lon?: string },
  ): Promise<TodaySummaryResponse> {
    if (!lon || !lat) {
      throw new BadRequestException('missing lat, lon');
    }
    return this.weathersService.getTodaySummary(Number(lat), Number(lon));
  }

  @Get('today/banner')
  getTodayBanner(@Query() { lat, lon }: { lat?: string; lon?: string }) {
    if (!lon || !lat) {
      throw new BadRequestException('missing lat, lon');
    }

    return this.weathersService.getTodayBanner(Number(lat), Number(lon));
  }

  @Get('hourly')
  getHourly(
    @Query()
    { lat, lon, offset }: { lat?: string; lon?: string; offset?: string },
  ) {
    if (!lon || !lat) {
      throw new BadRequestException('missing lat, lon');
    }
    return this.weathersService.getHourly(
      Number(lat),
      Number(lon),
      Number(offset),
    );
  }

  @Get('widget')
  getWidget(@Query() { lat, lon }: { lat?: string; lon?: string }) {
    if (!lon || !lat) {
      throw new BadRequestException('missing lat, lon');
    }
    return this.weathersService.getWidget(Number(lat), Number(lon));
  }

  @Head('push')
  sendPushNotification(
    @Query()
    {
      lat,
      lon,
      type,
      period,
    }: {
      lat?: string;
      lon?: string;
      type?: 'summary' | 'period';
      period?: string;
    },
    @Req() { headers }: Request,
  ) {
    const fcmToken = headers['authorization'];
    if (!lat || !lon) {
      throw new BadRequestException('missing lat, lon');
    }

    return this.weathersService.sendPushNotification(
      Number(lat),
      Number(lon),
      type,
      fcmToken,
      period,
    );
  }
}
