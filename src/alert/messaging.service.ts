import * as admin from 'firebase-admin';

import { Injectable } from '@nestjs/common';
import { TIME_PERIODS } from '../surveys/constants';

@Injectable()
export class MessagingService {
  async sendPush(
    fcmToken: string,
    notification: {
      title: string;
      body: string;
    },
  ) {
    const message = {
      token: fcmToken,
      notification: {
        title: notification.title,
        body: notification.body,
      },
    };

    // FCM 메시지 보내기
    try {
      const response = await admin.messaging().send(message);
      console.log('Successfully sent message:', response);
    } catch (e) {
      throw new Error(e);
    }
  }
}
