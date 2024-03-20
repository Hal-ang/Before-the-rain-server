import { TimePeriod } from './constants';
import { User } from 'src/users/user.entity';
export declare class Survey {
    id: number;
    alertBeforeRain: number;
    timePeriods: TimePeriod[];
    summaryAlertTime: number;
    user: User;
}
