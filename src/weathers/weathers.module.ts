
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from './weather.entity';
import { WeathersService } from './weathers.service';
import { WeathersController } from './weathers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  providers: [WeathersService],
  controllers: [WeathersController],
})
export class WeathersModule {}
