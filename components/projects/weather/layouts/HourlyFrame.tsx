import React, { FC } from "react";
import Image from "next/image";
import { renderIcon } from "../utils/render-icon";
import { rotateWindIcon } from "../utils/rotate-wind-icon";
import { IHourlyInfo } from "../types/interfeces";
import { SunnyIcon } from "../icons/weather/Sunny";
import flagIcon from "../images/flag.png";
import clsx from "clsx";

interface IHourlyFrame {
  info: IHourlyInfo[];
  isUpdating: boolean;
}

export const HourlyFrame: FC<IHourlyFrame> = ({ info, isUpdating }) => {
  return (
    <div
      className={clsx(
        "grow",
        "py-4 px-4 xl:px-6 text-center",
        "shadow-weatherFrame rounded-[30px]",
        "bg-white dark:bg-weatherFrame",
        "text-black dark:text-white",
        isUpdating ? "blur-sm" : ""
      )}
    >
      <h2 className="mb-4 text-xl xl:text-3xl font-bold">Hourly Forecast:</h2>
      <div className="grid grid-cols-6 gap-1 xl:gap-4">
        {(info.length &&
          info.map((item: IHourlyInfo, index: number) => {
            return (
              <div
                key={index}
                className={clsx(
                  "xl:w-[120px]",
                  "py-6 px-2 xl:px-4",
                  "flex flex-col items-center gap-4",
                  "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
                )}
              >
                <span className="text-lg xl:text-xl font-bold">{item.time}</span>
                {renderIcon(item.weather, "h-14 w-14")}
                <span className="xl:text-lg font-bold">{item.temps} &deg;C</span>
                <Image
                  className={clsx("w-8 h-8", rotateWindIcon(item.windDirection))}
                  src={flagIcon}
                  alt="icon"
                  width={50}
                  height={50}
                />
                <span className="xl:text-lg font-bold">{item.windSpeed}km/h</span>
              </div>
            );
          })) ||
          Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className={clsx(
                "xl:w-[120px]",
                "py-6 px-2 xl:px-4",
                "flex flex-col items-center gap-4",
                "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
              )}
            >
              <span className="text-lg xl:text-xl font-bold">09:00</span>
              <SunnyIcon className="h-14 w-14" />
              <span className="xl:text-lg font-bold">26 &deg;C</span>
              <Image className="w-8 h-8" src={flagIcon} alt="icon" width={50} height={50} />
              <span className="xl:text-lg font-bold">3km/h</span>
            </div>
          ))}
      </div>
    </div>
  );
};
