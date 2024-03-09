import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clothes } from './clothes.entity';

@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(Clothes)
    private clothesRepository: Repository<Clothes>,
  ) {}
}
