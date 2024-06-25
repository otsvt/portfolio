import { date, daysOfWeek, months } from "../data/dates";

export const getMainInfo = (data: any, city?: string) => {
  let currentDate = "";
  let currentTime = "";
  let currentMonth = "";
  let currentDay = "";
  let currentRegion = "";
  let isDay = data?.current?.["is_day"] === 1 ? true : false;

  if (data?.current?.time) {
    [currentDate, currentTime] = data.current.time.split("T");
    [, currentMonth, currentDay] = currentDate.split("-");
  }

  if (data?.timezone) {
    [currentRegion] = data.timezone.split("/");
  }

  return {
    region: currentRegion,
    day: daysOfWeek[date.getDay()],
    number: parseInt(currentDay),
    month: months[parseInt(currentMonth)],
    time: currentTime,
    city,
    isDay,
  };
};
