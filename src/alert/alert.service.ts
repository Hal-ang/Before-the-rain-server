import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MessagingService } from './messaging.service'; // 예를 들어 FCM 메시징 서비스 구현체
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from '@root/surveys/survey.entity';
import { Repository } from 'typeorm';
import { TIME_PERIODS } from '@root/surveys/constants';

@Injectable()
export class AlertService {
  constructor(
    @InjectRepository(Survey)
    private surveysRepository: Repository<Survey>,

    private messagingService: MessagingService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async handlePeriodCron() {
    // 모든 유저의 Survey 엔티티를 가져와서 각 유저별로 알림 시간을 계산
    const surveys = await this.surveysRepository.find({ relations: ['user'] });

    surveys.forEach((survey) => {
      let validPeriod = '';
      for (const period of survey.timePeriods) {
        const range = TIME_PERIODS[period];
        const now = new Date();

        const calculatedTime = range.start * 60 - survey.alertBeforeRain;

        const alertTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          Math.floor(calculatedTime / 60),
          Math.floor(calculatedTime % 60),
          0,
        );
        if (
          now.getHours() === alertTime.getHours() &&
          now.getMinutes() === alertTime.getMinutes()
        ) {
          validPeriod = period;
          break;
        }
      }
      if (validPeriod) {
        const { label } = TIME_PERIODS[validPeriod];
        this.messagingService.sendPush(survey.user.fcmToken, {
          title: `${label} 미리 알림`,
          body: `${label} 강수량을 확인하세요!`,
        });
      }
    });
  }

  @Cron(CronExpression.EVERY_HOUR)
  async handleSummaryCron() {
    const surveys = await this.surveysRepository.find({ relations: ['user'] });

    surveys.forEach((survey) => {
      const now = new Date();
      if (now.getHours() === survey.summaryAlertTime) {
        this.messagingService.sendPush(survey.user.fcmToken, {
          title: `오늘의 요약 알림`,
          body: `오늘의 옷차림과 강수량을 확인하세요!`,
        });
      }
    });
  }
}
