import { ClothesModule } from 'src/clothes/clothes.module';
import { ClothesService } from 'src/clothes/clothes.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from './weather.entity';
import { WeathersService } from './weathers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  providers: [WeathersService],
})
export class WeathersModule {}
