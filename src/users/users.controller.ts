import {
  Body,
  Controller,
  NotFoundException,
  Patch,
  Post,
  Req,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserTokenDto } from './userDto';
import { CreatedUserReponse } from './users.type';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<CreatedUserReponse> {
    return this.usersService.createUser(user);
  }

  @Patch()
  updateUserToken(
    @Body() updateUserToken: UpdateUserTokenDto,
    @Req() { headers }: Request,
  ) {
    const userId = headers['authorization'];
    if (!userId) {
      throw new NotFoundException('Authorization header not found');
    }
    return this.usersService.updateUserToken(updateUserToken.fcmToken, userId);
  }
}
