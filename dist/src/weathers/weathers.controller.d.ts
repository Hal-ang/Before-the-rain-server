import { WeathersService } from './weathers.service';
import { TodaySummaryResponse } from './weathers.type';
export declare class WeathersController {
    private readonly weathersService;
    constructor(weathersService: WeathersService);
    getTodaySummary({ lat, lon }: {
        lat?: string;
        lon?: string;
    }): Promise<TodaySummaryResponse>;
    getTodayBanner({ lat, lon }: {
        lat?: string;
        lon?: string;
    }): Promise<import("./weathers.type").TodayBannerResponse>;
    getHourly({ lat, lon, offset }: {
        lat?: string;
        lon?: string;
        offset?: string;
    }): Promise<{
        hourly: {
            dt: number;
            temp: number;
            weather: import("./weathers.type").OpenWeatherSectionResponse[];
            pop: number;
            clothes?: import("../clothes/clothes.entity").Clothes[];
        }[];
    }>;
    getWidget({ lat, lon }: {
        lat?: string;
        lon?: string;
    }): Promise<{
        dt: number;
        temp: number;
        pop: number;
        symbol: any;
        clothes: any[];
    }>;
    sendPushNotification({ lat, lon, type, period, }: {
        lat?: string;
        lon?: string;
        type?: 'summary' | 'period';
        period?: string;
    }, { headers }: Request): Promise<"call summary" | "call period ">;
}
