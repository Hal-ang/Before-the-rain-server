import { Clothes } from 'src/clothes/clothes.entity';
import { DataSource } from 'typeorm';
import { WEATHER_DATA } from '../../constants/data';

export default class CreateWeathersSeed {
  public async run(dataSource: DataSource): Promise<void> {
    const weathersRepository = dataSource.getRepository(Clothes);

    await weathersRepository.save(WEATHER_DATA);
  }
}
