import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from './weather.entity';

@Injectable()
export class WeathersService {
  constructor(
    @InjectRepository(Weather)
    private weathersRepository: Repository<Weather>,
  ) {}
}
