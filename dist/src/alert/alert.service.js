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
exports.AlertService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const messaging_service_1 = require("./messaging.service");
const typeorm_1 = require("@nestjs/typeorm");
const survey_entity_1 = require("../surveys/survey.entity");
const typeorm_2 = require("typeorm");
const constants_1 = require("../surveys/constants");
let AlertService = class AlertService {
    constructor(surveysRepository, messagingService) {
        this.surveysRepository = surveysRepository;
        this.messagingService = messagingService;
    }
    async handlePeriodCron() {
        const surveys = await this.surveysRepository.find({ relations: ['user'] });
        surveys.forEach((survey) => {
            let validPeriod = '';
            for (const period of survey.timePeriods) {
                const range = constants_1.TIME_PERIODS[period];
                const now = new Date();
                const calculatedTime = range.start * 60 - survey.alertBeforeRain;
                const alertTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Math.floor(calculatedTime / 60), Math.floor(calculatedTime % 60), 0);
                if (now.getHours() === alertTime.getHours() &&
                    now.getMinutes() === alertTime.getMinutes()) {
                    validPeriod = period;
                    break;
                }
            }
            if (validPeriod) {
                const { label } = constants_1.TIME_PERIODS[validPeriod];
                this.messagingService.sendPush(survey.user.fcmToken, {
                    title: `${label} 미리 알림`,
                    body: `${label} 강수량을 확인하세요!`,
                });
            }
        });
    }
    async handleSummaryCron() {
        const surveys = await this.surveysRepository.find({ relations: ['user'] });
        surveys.forEach((survey) => {
            const now = new Date();
            if (now.getHours() === survey.summaryAlertTime) {
                this.messagingService.sendPush(survey.user.fcmToken, {
                    title: `오늘의 요약 알림`,
                    body: `오늘의 옷차림과 강수량을 확인하세요!`,
                });
            }
        });
    }
};
exports.AlertService = AlertService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlertService.prototype, "handlePeriodCron", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlertService.prototype, "handleSummaryCron", null);
exports.AlertService = AlertService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(survey_entity_1.Survey)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        messaging_service_1.MessagingService])
], AlertService);
//# sourceMappingURL=alert.service.js.map