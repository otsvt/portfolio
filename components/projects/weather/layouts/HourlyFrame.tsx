import React, { FC } from "react";
import { RainyIcon } from "../icons/weather/Rainy";
import flagIcon from "../images/flag.png";
import Image from "next/image";
import clsx from "clsx";
import { CloudyIcon } from "../icons/weather/Cloudy";
import { OvercastIcon } from "../icons/weather/Overcast";
import { SunnyIcon } from "../icons/weather/Sunny";

export const HourlyFrame: FC = () => {
  return (
    <div
      className={clsx(
        "py-4 px-6 text-center",
        "shadow-weatherFrame rounded-[30px]",
        "bg-white dark:bg-weatherFrame",
        "text-black dark:text-white"
      )}
    >
      <h2 className="mb-4 text-3xl font-bold">Hourly Forecast:</h2>
      <div className="grid grid-cols-6 gap-4">
        <div
          className={clsx(
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
        <div
          className={clsx(
            "py-6 px-5",
            "flex flex-col items-center gap-4",
            "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
          )}
        >
          <span className="text-xl font-bold">12:00</span>
          <CloudyIcon className="h-14 w-14" />
          <span className="text-lg font-bold">22 &deg;C</span>
          <Image className="w-8 h-8" src={flagIcon} alt="icon" width={50} height={50} />
          <span className="text-lg font-bold">2.2km/h</span>
        </div>
        <div
          className={clsx(
            "py-6 px-5",
            "flex flex-col items-center gap-4",
            "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
          )}
        >
          <span className="text-xl font-bold">15:00</span>
          <RainyIcon className="h-14 w-14" />
          <span className="text-lg font-bold">21 &deg;C</span>
          <Image className="w-8 h-8" src={flagIcon} alt="icon" width={50} height={50} />
          <span className="text-lg font-bold">2.1km/h</span>
        </div>
        <div
          className={clsx(
            "py-6 px-5",
            "flex flex-col items-center gap-4",
            "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
          )}
        >
          <span className="text-xl font-bold">18:00</span>
          <RainyIcon className="h-14 w-14" />
          <span className="text-lg font-bold">19 &deg;C</span>
          <Image className="w-8 h-8" src={flagIcon} alt="icon" width={50} height={50} />
          <span className="text-lg font-bold">2.4km/h</span>
        </div>
        <div
          className={clsx(
            "py-6 px-5",
            "flex flex-col items-center gap-4",
            "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
          )}
        >
          <span className="text-xl font-bold">21:00</span>
          <OvercastIcon className="h-14 w-14" />
          <span className="text-lg font-bold">18 &deg;C</span>
          <Image className="w-8 h-8" src={flagIcon} alt="icon" width={50} height={50} />
          <span className="text-lg font-bold">2.5km/h</span>
        </div>
        <div
          className={clsx(
            "py-6 px-5",
            "flex flex-col items-center gap-4",
            "bg-[#CCCDCE] dark:bg-weatherHourly rounded-[40px]"
          )}
        >
          <span className="text-xl font-bold">00:00</span>
          <CloudyIcon className="h-14 w-14" />
          <span className="text-lg font-bold">16 &deg;C</span>
          <Image className="w-8 h-8" src={flagIcon} alt="icon" width={50} height={50} />
          <span className="text-lg font-bold">3km/h</span>
        </div>
      </div>
    </div>
  );
};
