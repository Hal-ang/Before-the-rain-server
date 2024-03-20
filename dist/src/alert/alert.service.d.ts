import { MessagingService } from './messaging.service';
import { Survey } from '@root/surveys/survey.entity';
import { Repository } from 'typeorm';
export declare class AlertService {
    private surveysRepository;
    private messagingService;
    constructor(surveysRepository: Repository<Survey>, messagingService: MessagingService);
    handlePeriodCron(): Promise<void>;
    handleSummaryCron(): Promise<void>;
}
