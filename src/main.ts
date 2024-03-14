import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const fs = require('fs');

  const app = await NestFactory.create(
    AppModule,
    process.env.MODE === 'development'
      ? {
          httpsOptions: {
            key: fs.readFileSync(process.env.KEY_PEM),
            cert: fs.readFileSync(process.env.CERT_PEM),
          },
        }
      : {},
  );

  app.enableCors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'OPTIONS', 'DELETE'],
    allowedHeaders: ['Authorization'],
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

  await app.listen(4000);
}
bootstrap();
