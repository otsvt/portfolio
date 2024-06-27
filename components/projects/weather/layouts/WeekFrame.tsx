import React, { FC } from "react";
import { IDailyInfo } from "../types/interfeces";
import { renderIcon } from "../utils/render-icon";
import { CloudyIcon } from "../icons/weather/Cloudy";
import clsx from "clsx";

interface IWeekFrame {
  info: IDailyInfo[];
  isUpdating: boolean;
}

export const WeekFrame: FC<IWeekFrame> = ({ info, isUpdating }) => {
  return (
    <div
      className={clsx(
        "py-4 px-4 xl:px-6 text-center",
        "shadow-weatherFrame rounded-[30px]",
        "bg-white dark:bg-weatherFrame",
        "text-black dark:text-white",
        isUpdating ? "blur-sm" : ""
      )}
    >
      <h2 className="mb-4 text-xl xl:text-3xl font-bold">5 Days Forecast:</h2>
      <div className="flex flex-col gap-3">
        {(info.length &&
          info.map((item, i) => {
            return (
              <div key={i} className="flex items-center gap-2 xl:gap-8">
                {renderIcon(item.weather, "w-12 h-12")}
                <span className="w-[55px] text-lg xl:text-xl font-semibold text-nowrap">{item.temp} &deg;C</span>
                <span className="xl:text-lg font-semibold text-nowrap">
                  {item.day}, {item.number} {item.month}
                </span>
              </div>
            );
          })) ||
          Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="flex items-center gap-8">
              <CloudyIcon className="w-12 h-12" />
              <span className="w-[55px] text-xl font-semibold text-nowrap">20 &deg;C</span>
              <span className="text-lg font-semibold text-nowrap">Saturday, 21 Sep</span>
            </div>
          ))}
      </div>
    </div>
  );
};
