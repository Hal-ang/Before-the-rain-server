import * as admin from 'firebase-admin';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

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

  const serviceAccount = require('/Users/hal-ang/Desktop/before-the-rain/server/before-the-rain-firebase-adminsdk-agznf-459d107160.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  await app.listen(4000);
}
bootstrap();
