import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './weather.entity';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class WeathersService {
  constructor(
    @InjectRepository(Weather)
    private weathersRepository: Repository<Weather>,
    private configService: ConfigService,
    readonly httpService: HttpService,
  ) {}

  async getTodaySummary(lat: number, lon: number) {
    const apiKey = this.configService.get<string>('API_KEY');
    try {
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
}
