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

export interface GeocodingResponse {
  meta: {
    total_count: number;
  };
  documents: {
    region_type: string;
    address_name: string; // "경기도 성남시 분당구 삼평동"
    region_1depth_name: string; //  "경기도"
    region_2depth_name: string; // "성남시 분당구"
    region_3depth_name: string; // "삼평동"
    region_4depth_name: string; // ''
    code: string;
    x: number;
    y: number;
  }[];
}
