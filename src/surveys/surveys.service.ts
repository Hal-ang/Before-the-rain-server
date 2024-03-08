import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './survey.entity';

@Injectable()
export class SurveysService {
  constructor(
    @InjectRepository(Survey)
    private surveysRepository: Repository<Survey>,
  ) {}

  findAll(): Promise<Survey[]> {
    return this.surveysRepository.find();
  }

  findOne(id: number): Promise<Survey | null> {
    return this.surveysRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.surveysRepository.delete(id);
  }
}
