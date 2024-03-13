import {
  CLOTHES_DATA,
  WEATHER_DATA,
  WEATHER_TO_CLOTHES_MAP,
} from '../../constants/data';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';

import { Clothes } from 'src/clothes/clothes.entity';
import { Weather } from 'src/weathers/weather.entity';

export default class CreateClothesAndWeatherSeed {
  public async run(dataSource: DataSource): Promise<void> {
    const clothesRepository = dataSource.getRepository(Clothes);
    const weatherRepository = dataSource.getRepository(Weather);

    // for
    // await weatherRepository.save(WEATHER_DATA);
    await clothesRepository.save(CLOTHES_DATA);

    const clothesData = [];
  }
}
