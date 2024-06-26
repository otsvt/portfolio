import { DATE, DAYS_OF_WEEK, MONTHS } from "../data/dates";

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
    day: DAYS_OF_WEEK[DATE.getDay()].slice(0, 3),
    number: parseInt(currentDay),
    month: MONTHS[parseInt(currentMonth) - 1],
    time: currentTime,
    city,
    isDay,
  };
};
