import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const fs = require('fs');

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const serviceAccount = require(process.env.GOOGLE_SERVICE_JSON_PATH);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  await app.listen(4000);
}
bootstrap();
