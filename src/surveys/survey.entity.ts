import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IsString } from 'class-validator';
import { TimePeriod } from './constants';
import { User } from 'src/users/user.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alertBeforeRain: number;

  @Column()
  isSummaryAlertEnabled: boolean;

  @Column('simple-array')
  timePeriods: TimePeriod[];

  @IsString()
  summaryAlertTime: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;
}
