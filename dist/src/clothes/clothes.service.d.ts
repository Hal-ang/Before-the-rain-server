import { Repository } from 'typeorm';
import { Clothes } from './clothes.entity';
export declare class ClothesService {
    private clothesRepository;
    constructor(clothesRepository: Repository<Clothes>);
}
