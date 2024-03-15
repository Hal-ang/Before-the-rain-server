import { Module } from '@nestjs/common';
import { Survey } from '@root/surveys/survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Survey])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
