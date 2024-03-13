export interface OpenWeatherSectionResponse {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface OpenWeatherCurrentResponse {
  dt: number;
  temp: number;
  weather: OpenWeatherSectionResponse[];
}
export interface OpenWeatherSummaryResponse {
  current: OpenWeatherCurrentResponse;
  daily: {
    temp: {
      min: number;
      max: number;
    };
  }[];
}

export interface OpenWeatherTodayBannerResponse {
  daily: {
    pop: number;
  }[];
}

export interface OpenWeatherHourlyResponse {
  hourly: {
    dt: number;
    temp: number;
    weather: OpenWeatherSectionResponse[];
    pop: number;
  }[];
}

export interface TodaySummaryResponse {
  dt: number;
  temp: number;
  weather: OpenWeatherSectionResponse;
  min: number;
  max: number;
  cityName: string;
}

export interface TodayBannerResponse {
  desc: string;
  title: string;
  rainGage: number;
  imageUrl: string;
}
