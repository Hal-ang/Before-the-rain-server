import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './userDto';
import { CreatedUserReponse } from './users.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUser: CreateUserDto): Promise<CreatedUserReponse> {
    return this.usersService.createUser(createUser);
  }
}
