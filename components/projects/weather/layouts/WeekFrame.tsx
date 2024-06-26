import React, { FC } from "react";
import { WeatherTypes } from "../types/enums";
import { IDailyInfo } from "../types/interfeces";
import { RainyIcon } from "../icons/weather/Rainy";
import { SunnyIcon } from "../icons/weather/Sunny";
import { CloudyIcon } from "../icons/weather/Cloudy";
import { OvercastIcon } from "../icons/weather/Overcast";
import clsx from "clsx";

interface IWeekFrame {
  info: IDailyInfo[];
  isSuccess: boolean;
  isFetching: boolean;
}

export const WeekFrame: FC<IWeekFrame> = ({ info, isFetching, isSuccess }) => {
  return (
    <div
      className={clsx(
        "py-4 px-6 text-center",
        "shadow-weatherFrame rounded-[30px]",
        "bg-white dark:bg-weatherFrame",
        "text-black dark:text-white",
        !isSuccess || isFetching ? "blur-sm" : ""
      )}
    >
      <h2 className="mb-4 text-3xl font-bold">5 Days Forecast:</h2>
      <div className="flex flex-col gap-3">
        {(info.length &&
          info.map((item, i) => {
            const renderIcon = (type: string | undefined) => {
              if (type === WeatherTypes.Sunny) return <SunnyIcon className="h-12 w-12" />;
              if (type === WeatherTypes.Cloudy) return <CloudyIcon className="h-12 w-12" />;
              if (type === WeatherTypes.Overcast) return <OvercastIcon className="h-12 w-12" />;
              if (type === WeatherTypes.Rainy) return <RainyIcon className="h-12 w-12" />;
            };

            return (
              <div key={i} className="flex items-center gap-8">
                {renderIcon(item.weather)}
                <span className="w-[55px] text-xl font-semibold">{item.temp} &deg;C</span>
                <span className="text-lg font-semibold">
                  {item.day}, {item.number} {item.month}
                </span>
              </div>
            );
          })) ||
          Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="flex items-center gap-8">
              <CloudyIcon className="w-12 h-12" />
              <span className="w-[55px] text-xl font-semibold">20 &deg;C</span>
              <span className="text-lg font-semibold">Saturday, 21 Sep</span>
            </div>
          ))}
      </div>
    </div>
  );
};
