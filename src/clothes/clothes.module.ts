import { Clothes } from './clothes.entity';
import { ClothesService } from './clothes.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothesController } from './clothes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Clothes])],
  providers: [ClothesService],
  controllers: [ClothesController],
})
export class ClothesModule {}
