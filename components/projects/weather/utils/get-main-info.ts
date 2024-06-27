import { IMainInfo } from "../types/interfeces";
import { DATE, DAYS_OF_WEEK, MONTHS } from "../data/dates";

export const getMainInfo = (data: any, city?: string): IMainInfo | {} => {
  if (data?.current) {
    const [currentDate] = data.current.time.split("T");
    const [currentRegion] = data.timezone.split("/");
    const [, currentMonth, currentDay] = currentDate.split("-");
    const isDay = data.current["is_day"] === 1 ? true : false;

    return {
      region: currentRegion,
      day: DAYS_OF_WEEK[DATE.getDay()].slice(0, 3),
      number: parseInt(currentDay).toString(),
      month: MONTHS[parseInt(currentMonth) - 1],
      city,
      isDay,
    };
  } else return {};
};
