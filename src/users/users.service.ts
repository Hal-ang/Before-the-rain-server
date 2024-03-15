import { InjectRepository } from '@nestjs/typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './userDto';

import { Survey } from '@root/surveys/survey.entity';
import { CreatedUserReponse } from './users.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<CreatedUserReponse | null> {
    const duplicatedUser = await this.usersRepository.findOne({
      where: { fcmToken: createUserDto.fcmToken },
    });
    if (duplicatedUser) {
      throw new ConflictException('Duplicated fcmToken');
    }

    try {
      const { survey, ...user } =
        await this.usersRepository.save(createUserDto);
      await this.surveyRepository.save({ user, ...survey });

      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
