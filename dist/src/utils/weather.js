"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherFromTemp = void 0;
const data_1 = require("../database/seeds/data");
const getWeatherFromTemp = (temp) => {
    if (temp >= 28) {
        return data_1.WEATHER_DATA.find(({ degree }) => degree === 8);
    }
    else if (temp >= 23) {
        return data_1.WEATHER_DATA.find(({ degree }) => degree === 7);
    }
    else if (temp >= 20) {
        return data_1.WEATHER_DATA.find(({ degree }) => degree === 6);
    }
    else if (temp >= 17) {
        return data_1.WEATHER_DATA.find(({ degree }) => degree === 5);
    }
    else if (temp >= 12) {
        return data_1.WEATHER_DATA.find(({ degree }) => degree === 4);
    }
    else if (temp >= 9) {
        return data_1.WEATHER_DATA.find(({ degree }) => degree === 3);
    }
    else if (temp >= 5) {
        return data_1.WEATHER_DATA.find(({ degree }) => degree === 2);
    }
    return data_1.WEATHER_DATA.find(({ degree }) => degree === 1);
};
exports.getWeatherFromTemp = getWeatherFromTemp;
//# sourceMappingURL=weather.js.map