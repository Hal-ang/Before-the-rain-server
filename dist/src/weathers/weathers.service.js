"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeathersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const weather_entity_1 = require("./weather.entity");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const weather_1 = require("../constants/weather");
const weather_2 = require("../utils/weather");
const data_1 = require("../database/seeds/data");
let WeathersService = class WeathersService {
    constructor(weathersRepository, configService, httpService) {
        this.weathersRepository = weathersRepository;
        this.configService = configService;
        this.httpService = httpService;
    }
    getOpenWeatherAPI(type, query) {
        const apiKey = this.configService.get('API_KEY');
        switch (type) {
            case 'today-summary':
                return `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&exclude=minutely,hourly,alerts&lang=kr&units=metric&appid=${apiKey}`;
            case 'today-banner':
                return `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&exclude=current,minutely,hourly,alerts&lang=kr&units=metric&appid=${apiKey}`;
            default:
                return `https://api.openweathermap.org/data/3.0/onecall?lat=${query.lat}&lon=${query.lon}&exclude=current,minutely,daily,alerts&lang=kr&units=metric&appid=${apiKey}`;
        }
    }
    async getTodaySummary(lat, lon) {
        console.log(`GET /weathers/today/summary?lat=${lat}lon=${lon}`);
        try {
            const { data: { current, daily }, } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(this.getOpenWeatherAPI('today-summary', { lat, lon })));
            const { weather, temp, dt } = current;
            const { temp: { min, max }, } = daily[0];
            const { data: { documents }, } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?y=${lat}&x=${lon}`, {
                headers: {
                    Authorization: `KakaoAK ${this.configService.get('KAKAO_REST_API_KEY')}`,
                },
            }));
            return {
                dt,
                temp,
                weather: weather[0],
                min,
                max,
                cityName: documents[0].address_name,
            };
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getTodayBanner(lat, lon) {
        console.log(`GET /weathers/today/banner?lat=${lat}lon=${lon}`);
        try {
            const { data: { daily }, } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(this.getOpenWeatherAPI('today-banner', { lat, lon })));
            const { pop: rainGage } = daily[0];
            const banner = rainGage < 0.1
                ? weather_1.BANNERS.smile
                : rainGage < 0.5
                    ? weather_1.BANNERS.worry
                    : weather_1.BANNERS.umbrella;
            return { ...banner, rainGage };
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getHourly(lat, lon, offset) {
        console.log(`GET /weathers/hourly?lat=${lat}lon=${lon}offset=${offset}`);
        try {
            const { data: { hourly }, } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(this.getOpenWeatherAPI('hourly', { lat, lon })));
            const mappedHourlyData = hourly
                .slice(0, offset)
                .map(({ dt, temp, weather, pop }) => ({ dt, temp, weather, pop }));
            for (const weathers of mappedHourlyData) {
                const { clothes } = await this.weathersRepository.findOne({
                    where: { id: (0, weather_2.getWeatherFromTemp)(weathers.temp).id },
                    relations: ['clothes'],
                });
                weathers.clothes = clothes;
            }
            return { hourly: mappedHourlyData };
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async getWidget(lat, lon) {
        console.log(`GET /weathers/widget?lat=${lat}lon=${lon}`);
        try {
            const { data: { hourly }, } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(this.getOpenWeatherAPI('hourly', { lat, lon })));
            const { dt, temp, weather, pop } = hourly[0];
            const widgetResponse = {
                dt,
                temp,
                pop,
                symbol: data_1.SF_SYMBOLS[weather[0].icon],
                clothes: [],
            };
            const { clothes } = await this.weathersRepository.findOne({
                where: { id: (0, weather_2.getWeatherFromTemp)(temp).id },
                relations: ['clothes'],
            });
            widgetResponse.clothes = clothes;
            return widgetResponse;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async sendPushNotification(lat, lon, type, fcmToken, period) {
        if (type === 'summary') {
            console.log('HEAD /weathers/push' + type + period + fcmToken);
            return 'call summary';
        }
        else {
            console.log('HEAD /weathers/push' + type + period + fcmToken);
            return 'call period ';
        }
    }
};
exports.WeathersService = WeathersService;
exports.WeathersService = WeathersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(weather_entity_1.Weather)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService,
        axios_1.HttpService])
], WeathersService);
//# sourceMappingURL=weathers.service.js.map