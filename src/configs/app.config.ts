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
  };
});
