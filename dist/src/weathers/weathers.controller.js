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
exports.WeathersController = void 0;
const common_1 = require("@nestjs/common");
const weathers_service_1 = require("./weathers.service");
let WeathersController = class WeathersController {
    constructor(weathersService) {
        this.weathersService = weathersService;
    }
    getTodaySummary({ lat, lon }) {
        if (!lon || !lat) {
            throw new common_1.BadRequestException('missing lat, lon');
        }
        return this.weathersService.getTodaySummary(Number(lat), Number(lon));
    }
    getTodayBanner({ lat, lon }) {
        if (!lon || !lat) {
            throw new common_1.BadRequestException('missing lat, lon');
        }
        return this.weathersService.getTodayBanner(Number(lat), Number(lon));
    }
    getHourly({ lat, lon, offset }) {
        if (!lon || !lat) {
            throw new common_1.BadRequestException('missing lat, lon');
        }
        return this.weathersService.getHourly(Number(lat), Number(lon), Number(offset));
    }
    getWidget({ lat, lon }) {
        if (!lon || !lat) {
            throw new common_1.BadRequestException('missing lat, lon');
        }
        return this.weathersService.getWidget(Number(lat), Number(lon));
    }
    sendPushNotification({ lat, lon, type, period, }, { headers }) {
        const fcmToken = headers['authorization'];
        if (!lat || !lon) {
            throw new common_1.BadRequestException('missing lat, lon');
        }
        return this.weathersService.sendPushNotification(Number(lat), Number(lon), type, fcmToken, period);
    }
};
exports.WeathersController = WeathersController;
__decorate([
    (0, common_1.Get)('today/summary'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeathersController.prototype, "getTodaySummary", null);
__decorate([
    (0, common_1.Get)('today/banner'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WeathersController.prototype, "getTodayBanner", null);
__decorate([
    (0, common_1.Get)('hourly'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WeathersController.prototype, "getHourly", null);
__decorate([
    (0, common_1.Get)('widget'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WeathersController.prototype, "getWidget", null);
__decorate([
    (0, common_1.Head)('push'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Request]),
    __metadata("design:returntype", void 0)
], WeathersController.prototype, "sendPushNotification", null);
exports.WeathersController = WeathersController = __decorate([
    (0, common_1.Controller)('weathers'),
    __metadata("design:paramtypes", [weathers_service_1.WeathersService])
], WeathersController);
//# sourceMappingURL=weathers.controller.js.map