import { CLOTHES_DATA } from '../../constants/data';
import { Clothes } from 'src/clothes/clothes.entity';
import { DataSource } from 'typeorm';

export default class CreateClothesSeed {
  public async run(dataSource: DataSource): Promise<void> {
    const clothesRepository = dataSource.getRepository(Clothes);

    await clothesRepository.save(CLOTHES_DATA);
  }
}
