"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertModule = void 0;
const alert_service_1 = require("./alert.service");
const messaging_service_1 = require("./messaging.service");
const common_1 = require("@nestjs/common");
const survey_entity_1 = require("../surveys/survey.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/user.entity");
let AlertModule = class AlertModule {
};
exports.AlertModule = AlertModule;
exports.AlertModule = AlertModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([survey_entity_1.Survey, user_entity_1.User])],
        providers: [alert_service_1.AlertService, messaging_service_1.MessagingService],
    })
], AlertModule);
//# sourceMappingURL=alert.module.js.map