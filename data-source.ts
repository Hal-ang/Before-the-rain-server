import * as dotenv from 'dotenv';

import { DataSource } from 'typeorm';
dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.js'],
  migrationsTableName: 'migrations',
});
