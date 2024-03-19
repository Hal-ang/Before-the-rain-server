import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TimePeriod } from './constants';
import { User } from 'src/users/user.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alertBeforeRain: number;

  @Column('simple-array')
  timePeriods: TimePeriod[];

  @Column()
  summaryAlertTime: number;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;
}
