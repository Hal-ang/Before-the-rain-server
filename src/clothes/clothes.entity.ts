import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Weather } from 'src/weathers/weather.entity';

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Weather, (weather) => weather.clothes)
  weather: Weather[];
}
