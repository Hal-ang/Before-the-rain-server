import * as admin from 'firebase-admin';

import { Injectable } from '@nestjs/common';

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
      console.log(e);
    }
  }

  async sendSilentPush(fcmToken: string) {
    const message = {
      apns: {
        headers: {
          'apns-priority': '5',
          'apns-push-type': 'background',
        },
        payload: {
          aps: {
            'content-available': 1,
            badge: 1,
            sound: 'default',
          },
        },
      },
      token: fcmToken,
    };
    // FCM 메시지 보내기
    try {
      const response = await admin.messaging().send(message);
      console.log('Successfully sent slient message:', response);
    } catch (e) {
      // 에러 발생 시 유저 정보 삭제 고려하기
      console.log(e);
    }
  }
}
