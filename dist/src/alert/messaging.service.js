"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingService = void 0;
const admin = require("firebase-admin");
const common_1 = require("@nestjs/common");
let MessagingService = class MessagingService {
    async sendPush(fcmToken, notification) {
        const message = {
            token: fcmToken,
            notification: {
                title: notification.title,
                body: notification.body,
            },
        };
        try {
            const response = await admin.messaging().send(message);
            console.log('Successfully sent message:', response);
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
exports.MessagingService = MessagingService;
exports.MessagingService = MessagingService = __decorate([
    (0, common_1.Injectable)()
], MessagingService);
//# sourceMappingURL=messaging.service.js.map