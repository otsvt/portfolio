import { DATE, DAYS_OF_WEEK } from "../data/dates";

export const getWeekDay = () => {
  const daysOfWeek = [];

  for (let i = 1; i <= 5; i++) {
    const futureDate = new Date(DATE);
    futureDate.setDate(DATE.getDate() + i);
    const dayOfWeek = futureDate.getDay();
    const day = DAYS_OF_WEEK[dayOfWeek];
    daysOfWeek.push(day);
  }

  return daysOfWeek;
};
