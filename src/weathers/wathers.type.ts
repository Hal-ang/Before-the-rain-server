export interface TodaySummaryType {
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
