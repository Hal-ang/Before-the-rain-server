import { AlertService } from './alert.service';
import { MessagingService } from './messaging.service';
import { Module } from '@nestjs/common';
import { Survey } from '@root/surveys/survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@root/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey, User])],
  providers: [AlertService, MessagingService],
})
export class AlertModule {}
