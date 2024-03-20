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
exports.SurveysController = void 0;
const common_1 = require("@nestjs/common");
const surveys_service_1 = require("./surveys.service");
const surveyDto_1 = require("./surveyDto");
let SurveysController = class SurveysController {
    constructor(surveysService) {
        this.surveysService = surveysService;
    }
    updateSurvey({ headers }, updateSurvey) {
        const userId = headers['authorization'];
        if (!userId) {
            throw new common_1.NotFoundException('Authorization header not found');
        }
        return this.surveysService.updateSurvey(userId, updateSurvey);
    }
};
exports.SurveysController = SurveysController;
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, surveyDto_1.SurveyDto]),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "updateSurvey", null);
exports.SurveysController = SurveysController = __decorate([
    (0, common_1.Controller)('surveys'),
    __metadata("design:paramtypes", [surveys_service_1.SurveysService])
], SurveysController);
//# sourceMappingURL=surveys.controller.js.map