import { AxiosResponse } from './../../node_modules/axios/index.d';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './weather.entity';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {
  OpenWeatherHourlyResponse,
  OpenWeatherSectionResponse,
  OpenWeatherSummaryResponse,
  OpenWeatherTodayBannerResponse,
  TodayBannerResponse,
  TodaySummaryResponse,
} from './wathers.type';
import { BANNERS } from '@root/constants/weather';
import { getWeatherFromTemp } from '@root/utils/weather';
import { Clothes } from '@root/clothes/clothes.entity';

@Injectable()
export class WeathersService {
  constructor(
    @InjectRepository(Weather)
    private weathersRepository: Repository<Weather>,
    private configService: ConfigService,
    readonly httpService: HttpService,
  ) {}

  getOpenWeatherAPI(
    type: 'today-summary' | 'today-banner' | 'hourly',
    query: { lat: number; lon: number },
  ) {
    const apiKey = this.configService.get<string>('API_KEY');

    switch (type) {
      case 'today-summary':
        return `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&exclude=minutely,hourly,alerts&lang=kr&units=metric&appid=${apiKey}`;
      case 'today-banner':
        return `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&exclude=current,minutely,hourly,alerts&lang=kr&units=metric&appid=${apiKey}`;
      default:
        return `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&exclude=current,minutely,daily,alerts&lang=kr&units=metric&appid=${apiKey}`;
    }
  }

  async getTodaySummary(
    lat: number,
    lon: number,
  ): Promise<TodaySummaryResponse> {
    console.log(`GET /weathers/today/summary?lat=${lat}lon=${lon}`);

    try {
      const {
        data: { current, daily },
      } = await firstValueFrom<AxiosResponse<OpenWeatherSummaryResponse>>(
        this.httpService.get(
          this.getOpenWeatherAPI('today-summary', { lat, lon }),
        ),
      );

      const { weather, temp, dt } = current;
      const {
        temp: { min, max },
      } = daily[0];

      return {
        dt,
        temp,
        weather: weather[0],
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
    console.log(`GET /weathers/today/banner?lat=${lat}lon=${lon}`);

    try {
      const {
        data: { daily },
      } = await firstValueFrom<AxiosResponse<OpenWeatherTodayBannerResponse>>(
        this.httpService.get(
          this.getOpenWeatherAPI('today-banner', { lat, lon }),
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
    } catch (e) {
      throw new Error(e);
    }
  }

  async getHourly(lat: number, lon: number, offset: number) {
    console.log(`GET /weathers/hourly?lat=${lat}lon=${lon}offset=${offset}`);

    try {
      const {
        data: { hourly },
      } = await firstValueFrom<AxiosResponse<OpenWeatherHourlyResponse>>(
        this.httpService.get(this.getOpenWeatherAPI('hourly', { lat, lon })),
      );

      const mappedHourlyData: {
        dt: number;
        temp: number;
        weather: OpenWeatherSectionResponse[];
        pop: number;
        clothes?: Clothes[];
      }[] = hourly
        .slice(0, offset)
        .map(({ dt, temp, weather, pop }) => ({ dt, temp, weather, pop }));

      for (const weathers of mappedHourlyData) {
        const { clothes } = await this.weathersRepository.findOne({
          where: { id: getWeatherFromTemp(weathers.temp).id },
          relations: ['clothes'],
        });
        weathers.clothes = clothes;
      }

      return { hourly: mappedHourlyData };
    } catch (e) {
      throw new Error(e);
    }
  }
}
