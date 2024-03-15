import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './userDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello() {
    return 'hello';
  }

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    console.log('hi');

    return createUser;
  }
}
