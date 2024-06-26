import { WeatherTypes } from "../types/enums";

export const calcWeatherCode = (code: number): WeatherTypes => {
  if (code === 0) return WeatherTypes.Sunny;
  if (code <= 2) return WeatherTypes.Cloudy;
  if (code < 55) return WeatherTypes.Overcast;
  if (code >= 55) return WeatherTypes.Rainy;

  return WeatherTypes.Cloudy;
};
