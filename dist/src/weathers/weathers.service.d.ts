import { Repository } from 'typeorm';
import { Weather } from './weather.entity';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { OpenWeatherSectionResponse, TodayBannerResponse, TodaySummaryResponse } from './weathers.type';
import { Clothes } from '@root/clothes/clothes.entity';
export declare class WeathersService {
    private weathersRepository;
    private configService;
    readonly httpService: HttpService;
    constructor(weathersRepository: Repository<Weather>, configService: ConfigService, httpService: HttpService);
    getOpenWeatherAPI(type: 'today-summary' | 'today-banner' | 'hourly', query: {
        lat: number;
        lon: number;
    }): string;
    getTodaySummary(lat: number, lon: number): Promise<TodaySummaryResponse>;
    getTodayBanner(lat: number, lon: number): Promise<TodayBannerResponse>;
    getHourly(lat: number, lon: number, offset: number): Promise<{
        hourly: {
            dt: number;
            temp: number;
            weather: OpenWeatherSectionResponse[];
            pop: number;
            clothes?: Clothes[];
        }[];
    }>;
    getWidget(lat: number, lon: number): Promise<{
        dt: number;
        temp: number;
        pop: number;
        symbol: any;
        clothes: any[];
    }>;
    sendPushNotification(lat: number, lon: number, type: 'summary' | 'period', fcmToken: string, period?: string): Promise<"call summary" | "call period ">;
}
