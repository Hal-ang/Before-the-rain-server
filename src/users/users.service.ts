import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  getUser(fcmToken: string): Promise<User | null> {
    return null;
  }

  postUser(fcmToken: string): Promise<User | null> {
    return null;
  }
}
