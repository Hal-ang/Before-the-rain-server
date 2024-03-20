import { Survey } from 'src/surveys/survey.entity';
export declare class User {
    id: number;
    fcmToken: string;
    createdAt: Date;
    updatedAt: Date;
    survey: Survey;
}
