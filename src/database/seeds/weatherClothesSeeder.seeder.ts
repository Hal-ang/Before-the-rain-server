import {
  CLOTHES_DATA,
  WEATHER_DATA,
  WEATHER_TO_CLOTHES_MAP_DATA,
} from '@root/database/seeds/data';

import { Clothes } from '@root/clothes/clothes.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Weather } from '@root/weathers/weather.entity';

export default class WeatherClothesSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    const clothesRepository = dataSource.getRepository(Clothes);
    await clothesRepository.save(CLOTHES_DATA);

    const weatherRepository = dataSource.getRepository(Weather);
    const weatherArray = [];

    for (const weatherName in WEATHER_TO_CLOTHES_MAP_DATA) {
      const clothesArray = [];
      for (const clothesName of WEATHER_TO_CLOTHES_MAP_DATA[weatherName]) {
        clothesArray.push(
          await clothesRepository.findOne({ where: { name: clothesName } }),
        );
      }
      const targetWeather = WEATHER_DATA.find(
        (weather) => weather.name === weatherName,
      );
      if (!targetWeather) return;

      weatherArray.push(
        await weatherRepository.create({
          ...targetWeather,
          clothes: clothesArray,
        }),
      );
    }
    await weatherRepository.save(weatherArray);
  }
}
