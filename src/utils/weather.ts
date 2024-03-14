import { WEATHER_DATA } from '@root/database/seeds/data';

export const getWeatherFromTemp = (temp: number) => {
  if (temp >= 28) {
    return WEATHER_DATA.find(({ degree }) => degree === 8);
  } else if (temp >= 23) {
    return WEATHER_DATA.find(({ degree }) => degree === 7);
  } else if (temp >= 20) {
    return WEATHER_DATA.find(({ degree }) => degree === 6);
  } else if (temp >= 17) {
    return WEATHER_DATA.find(({ degree }) => degree === 5);
  } else if (temp >= 12) {
    return WEATHER_DATA.find(({ degree }) => degree === 4);
  } else if (temp >= 9) {
    return WEATHER_DATA.find(({ degree }) => degree === 3);
  } else if (temp >= 5) {
    return WEATHER_DATA.find(({ degree }) => degree === 2);
  }
  return WEATHER_DATA.find(({ degree }) => degree === 1);
};
