"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
dotenv.config();
async function bootstrap() {
    const fs = require('fs');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        credentials: true,
        methods: ['GET', 'PUT', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const serviceAccount = require(process.env.GOOGLE_SERVICE_JSON_PATH);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map