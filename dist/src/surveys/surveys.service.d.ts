import { Repository } from 'typeorm';
import { Survey } from './survey.entity';
import { SurveyDto } from './surveyDto';
export declare class SurveysService {
    private surveysRepository;
    constructor(surveysRepository: Repository<Survey>);
    updateSurvey(userId: string, newSurvey: SurveyDto): Promise<{
        id: number;
        alertBeforeRain: number;
        timePeriods: import("./constants").TimePeriod[];
        summaryAlertTime: number;
    } & Survey>;
}
