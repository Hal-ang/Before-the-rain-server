import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Survey } from 'src/surveys/survey.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fcmToken: string;

  @OneToOne(() => Survey, (survey) => survey.user)
  survey: Survey;
}
