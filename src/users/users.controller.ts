import { Controller, Get, Post } from '@nestjs/common';

import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(fcmToken: string): Promise<User | null> {
    return this.usersService.getUser(fcmToken);
  }
}
