export declare class MessagingService {
    sendPush(fcmToken: string, notification: {
        title: string;
        body: string;
    }): Promise<void>;
}
