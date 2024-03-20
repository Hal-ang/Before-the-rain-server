"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const clothes_entity_1 = require("../../clothes/clothes.entity");
const weather_entity_1 = require("../../weathers/weather.entity");
class WeatherClothesSeeder {
    async run(dataSource) {
        const clothesRepository = dataSource.getRepository(clothes_entity_1.Clothes);
        await clothesRepository.save(data_1.CLOTHES_DATA);
        const weatherRepository = dataSource.getRepository(weather_entity_1.Weather);
        const weatherArray = [];
        for (const weatherName in data_1.WEATHER_TO_CLOTHES_MAP_DATA) {
            const clothesArray = [];
            for (const clothesName of data_1.WEATHER_TO_CLOTHES_MAP_DATA[weatherName]) {
                clothesArray.push(await clothesRepository.findOne({ where: { name: clothesName } }));
            }
            const targetWeather = data_1.WEATHER_DATA.find((weather) => weather.name === weatherName);
            if (!targetWeather)
                return;
            weatherArray.push(await weatherRepository.create({
                ...targetWeather,
                clothes: clothesArray,
            }));
        }
        await weatherRepository.save(weatherArray);
    }
}
exports.default = WeatherClothesSeeder;
//# sourceMappingURL=weatherClothesSeeder.seeder.js.map