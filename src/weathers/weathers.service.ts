import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './weather.entity';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { TodayBannerResponse, TodaySummaryResponse } from './wathers.type';
import { BANNERS } from '@root/constants/weather';
@Injectable()
export class WeathersService {
  constructor(
    @InjectRepository(Weather)
    private weathersRepository: Repository<Weather>,
    private configService: ConfigService,
    readonly httpService: HttpService,
  ) {}

  async getTodaySummary(
    lat: number,
    lon: number,
  ): Promise<TodaySummaryResponse> {
    try {
      const apiKey = this.configService.get<string>('API_KEY');
      const {
        data: { current, daily },
      } = await firstValueFrom(
        this.httpService.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&lang=kr&units=metric&appid=${apiKey}`,
        ),
      );
      const { weather, temp, dt } = current;
      const {
        temp: { min, max },
      } = daily[0];

      return {
        dt,
        temp,
        weather,
        min,
        max,
        // TODO : geocoding API 연결 예정
        cityName: '서울특별시 은평구',
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async getTodayBanner(lat: number, lon: number): Promise<TodayBannerResponse> {
    const apiKey = this.configService.get<string>('API_KEY');
    const {
      data: { daily },
    } = await firstValueFrom(
      this.httpService.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&lang=kr&units=metric&appid=${apiKey}`,
      ),
    );
    const { pop: rainGage } = daily[0];

    const banner =
      rainGage < 0.1
        ? BANNERS.smile
        : rainGage < 0.5
          ? BANNERS.worry
          : BANNERS.umbrella;

    return { ...banner, rainGage };
  }
}
