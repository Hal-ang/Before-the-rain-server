import { AppConfig } from './config.type';
import process from 'process';
import { registerAs } from '@nestjs/config';

enum Environment {
  dev = 'development',
  prod = 'production',
}

export default registerAs<AppConfig>('app', () => {
  return {
    mode: process.env.MODE || Environment.dev,
    keyPem: process.env.KEY_PEM,
    certPem: process.env.CERT_PEM,
    appName: process.env.APP_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: parseInt(process.env.DB_PORT, 10),
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    apiKey: process.env.API_KEY,
    kakaoRestApiKey: process.env.KAKAO_REST_API_KEY,
  };
});
