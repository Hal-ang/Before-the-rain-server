export interface TodaySummaryResponse {
  dt: number;
  temp: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
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
