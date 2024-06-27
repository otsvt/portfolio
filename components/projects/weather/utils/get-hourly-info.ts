import { IHourlyInfo } from "../types/interfeces";
import { calcWeatherCode } from "./calc-weather-code";
import { calcWindDirection } from "./calc-wind-direction";

export const getHourlyInfo = (data: any): IHourlyInfo[] | [] => {
  if (data?.hourly) {
    const { temperature_2m, time, weather_code, wind_direction_10m, wind_speed_10m } = data.hourly;

    const temps = temperature_2m.slice(6, 22);
    const windDirection = wind_direction_10m.slice(6, 22);
    const windSpeed = wind_speed_10m.slice(6, 22);
    const weatherCode = weather_code.slice(6, 22);

    const fullTimesOfDay = time.slice(6, 22);
    const timesOfDay = fullTimesOfDay.map((time: string) => time.split("T")[1]);

    const weatherOfFullDay = timesOfDay.map((time: string, i: number) => ({
      time: time,
      temps: temps[i].toFixed(0),
      windDirection: calcWindDirection(windDirection[i]),
      windSpeed: windSpeed[i],
      weather: calcWeatherCode(weatherCode[i]),
    }));

    const weatherOfDay = weatherOfFullDay.filter((_: undefined, index: number) => index % 3 === 0);

    return weatherOfDay;
  } else return [];
};
