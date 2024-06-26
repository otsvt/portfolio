import { MONTHS } from "../data/dates";
import { calcAverageTemp } from "./calc-average-temp";
import { calcWeatherCode } from "./calc-weather-code";
import { getWeekDay } from "./get-week-day";

export const getDailyInfo = (data: any) => {
  if (data?.daily) {
    const { temperature_2m_min, temperature_2m_max, time, weather_code } = data.daily;

    const fullTimes = time.slice(1, 6);
    const weatherCode = weather_code.slice(1, 6);
    const tempsMin = temperature_2m_min.slice(1, 6);
    const tempsMax = temperature_2m_max.slice(1, 6);

    const daysOfWeek = getWeekDay();
    const avarageTemps = calcAverageTemp(tempsMin, tempsMax);

    const months = fullTimes.map((time: string) => time.split("-")[1]);
    const days = fullTimes.map((time: string) => time.split("-")[2]);

    const weatherOfWeek = days.map((day: string, i: number) => ({
      number: parseInt(day).toString(),
      month: MONTHS[parseInt(months[i]) - 1].slice(0, 3),
      weather: calcWeatherCode(weatherCode[i]),
      day: daysOfWeek[i],
      temp: avarageTemps[i].toFixed(0),
    }));

    return weatherOfWeek;
  } else return [];
};
