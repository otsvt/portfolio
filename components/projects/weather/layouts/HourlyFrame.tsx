import React, { FC } from "react";
import Image from "next/image";
import { WeatherTypes, WindDirection } from "../types/enums";
import { IHourlyInfo } from "../types/interfeces";
import { RainyIcon } from "../icons/weather/Rainy";
import { CloudyIcon } from "../icons/weather/Cloudy";
import { OvercastIcon } from "../icons/weather/Overcast";
import { SunnyIcon } from "../icons/weather/Sunny";
import flagIcon from "../images/flag.png";
import clsx from "clsx";

interface IHourlyFrame {
  isSuccess: boolean;
  isFetching: boolean;
  info: IHourlyInfo[];
}

export const HourlyFrame: FC<IHourlyFrame> = ({ info, isSuccess, isFetching }) => {
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
      <h2 className="mb-4 text-3xl font-bold">Hourly Forecast:</h2>
      <div className="grid grid-cols-6 gap-4">
        {(info.length &&
          info.map((item: IHourlyInfo, index: number) => {
            const renderIcon = (type: string | undefined) => {
              if (type === WeatherTypes.Sunny) return <SunnyIcon className="h-14 w-14" />;
              if (type === WeatherTypes.Cloudy) return <CloudyIcon className="h-14 w-14" />;
              if (type === WeatherTypes.Overcast) return <OvercastIcon className="h-14 w-14" />;
              if (type === WeatherTypes.Rainy) return <RainyIcon className="h-14 w-14" />;
            };

            return (
              <div
                key={index}
                className={clsx(
                  "w-[120px]",
                  "py-6 px-4",
                  "flex flex-col items-center gap-4",
                  "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
                )}
              >
                <span className="text-xl font-bold">{item.time}</span>
                {renderIcon(item.weather) || <CloudyIcon className="h-14 w-14" />}
                <span className="text-lg font-bold">{item.temps} &deg;C</span>
                <Image
                  className={clsx(
                    "w-8 h-8",
                    item.windDirection === WindDirection.Northeast && "rotate-45",
                    item.windDirection === WindDirection.East && "rotate-90",
                    item.windDirection === WindDirection.Southeast && "rotate-[135geg]",
                    item.windDirection === WindDirection.South && "rotate-180",
                    item.windDirection === WindDirection.Southwest && "-rotate-[135deg]",
                    item.windDirection === WindDirection.West && "-rotate-90",
                    item.windDirection === WindDirection.Northwest && "-rotate-45"
                  )}
                  src={flagIcon}
                  alt="icon"
                  width={50}
                  height={50}
                />
                <span className="text-lg font-bold">{item.windSpeed}km/h</span>
              </div>
            );
          })) ||
          Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className={clsx(
                "w-[120px]",
                "py-6 px-5",
                "flex flex-col items-center gap-4",
                "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
              )}
            >
              <span className="text-xl font-bold">09:00</span>
              <SunnyIcon className="h-14 w-14" />
              <span className="text-lg font-bold">26 &deg;C</span>
              <Image className="w-8 h-8" src={flagIcon} alt="icon" width={50} height={50} />
              <span className="text-lg font-bold">3km/h</span>
            </div>
          ))}
      </div>
    </div>
  );
};
