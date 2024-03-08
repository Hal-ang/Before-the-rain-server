import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Weather } from 'src/weathers/weather.entity';

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Weather, (weather) => weather.id)
  @JoinColumn()
  weather: Weather;
}
