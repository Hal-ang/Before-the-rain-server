import { SurveysService } from './surveys.service';
import { SurveyDto } from './surveyDto';
export declare class SurveysController {
    private readonly surveysService;
    constructor(surveysService: SurveysService);
    updateSurvey({ headers }: Request, updateSurvey: SurveyDto): Promise<{
        id: number;
        alertBeforeRain: number;
        timePeriods: import("./constants").TimePeriod[];
        summaryAlertTime: number;
    } & import("./survey.entity").Survey>;
}
