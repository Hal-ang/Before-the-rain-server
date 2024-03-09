import { Clothes } from './clothes.entity';
import { ClothesService } from './clothes.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeathersModule } from 'src/weathers/weathers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Clothes])],
  providers: [ClothesService],
})
export class ClothesModule {}
