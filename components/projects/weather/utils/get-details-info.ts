import { IDetailsInfo } from "../types/interfeces";
import { calcWeatherCode } from "./calc-weather-code";

export const getDetailsInfo = (data: any): IDetailsInfo | {} => {
  if (data?.current) {
    const {
      apparent_temperature,
      temperature_2m,
      surface_pressure,
      weather_code,
      wind_speed_10m,
      relative_humidity_2m,
    } = data.current;

    const { sunrise, sunset, uv_index_max } = data.daily;

    const [, currentSunrise] = sunrise[0].split("T");
    const [, currentSunset] = sunset[0].split("T");

    return {
      temp: temperature_2m.toFixed(0),
      apparentTemp: apparent_temperature.toFixed(0),
      pressure: surface_pressure.toFixed(0),
      windSpeed: wind_speed_10m.toFixed(0),
      humidity: relative_humidity_2m.toFixed(0),
      sunrise: currentSunrise,
      sunset: currentSunset,
      uv: uv_index_max[0].toFixed(0),
      weather: calcWeatherCode(weather_code),
    };
  } else return {};
};
