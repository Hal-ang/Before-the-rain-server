import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
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

  @OneToMany(() => Clothes, (clothes) => clothes.id)
  @JoinColumn()
  clothes: Clothes[];
}
