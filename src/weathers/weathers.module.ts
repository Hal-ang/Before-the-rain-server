import { HttpModule, HttpService } from '@nestjs/axios';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from './weather.entity';
import { WeathersController } from './weathers.controller';
import { WeathersService } from './weathers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Weather]), HttpModule],
  providers: [WeathersService],
  controllers: [WeathersController],
})
export class WeathersModule {}
