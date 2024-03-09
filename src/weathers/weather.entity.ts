import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Clothes } from 'src/clothes/clothes.entity';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  degree: number;

  @ManyToMany(() => Clothes, (clothes) => clothes.weather)
  @JoinTable()
  clothes: Clothes[];
}
