import { WeatherTypes } from "../types/enums";

export const calcWeatherCode = (code: number) => {
  if (code === 0) return WeatherTypes.Sunny;
  if (code === 1) return WeatherTypes.Cloudy;
  if (code < 55) return WeatherTypes.Overcast;
  if (code >= 55) return WeatherTypes.Rainy;

  return WeatherTypes.Cloudy;
};
