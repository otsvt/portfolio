export interface IIcon {
  className?: string;
}

export interface IMainInfo {
  region: string;
  city: string;
  day: string;
  number: string;
  month: string;
  isDay: boolean;
}

export interface IDetailsInfo {
  weather: string;
  temp: string;
  apparentTemp: string;
  pressure: string;
  windSpeed: string;
  humidity: string;
  sunrise: string;
  sunset: string;
  uv: string;
}

export interface IHourlyInfo {
  time: string;
  temps: string;
  windDirection: string;
  windSpeed: number;
  weather: string;
}

export interface IDailyInfo {
  number: string;
  month: string;
  weather: string;
  day: string;
  temp: string;
}
