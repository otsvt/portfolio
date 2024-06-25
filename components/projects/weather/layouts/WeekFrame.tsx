import React, { FC } from "react";
import { RainyIcon } from "../icons/weather/Rainy";
import { SunnyIcon } from "../icons/weather/Sunny";
import { CloudyIcon } from "../icons/weather/Cloudy";
import { OvercastIcon } from "../icons/weather/Overcast";
import clsx from "clsx";

export const WeekFrame: FC = () => {
  return (
    <div
      className={clsx(
        "py-4 px-8 text-center",
        "shadow-weatherFrame rounded-[30px]",
        "bg-white dark:bg-weatherFrame",
        "text-black dark:text-white"
      )}
    >
      <h2 className="mb-4 text-3xl font-bold">5 Days Forecast:</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-10">
          <RainyIcon className="w-12 h-12" />
          <span className="text-xl font-semibold">20 &deg;C</span>
          <span className="text-lg font-semibold">Friday, 1 Sep</span>
        </div>
        <div className="flex items-center gap-10">
          <SunnyIcon className="w-12 h-12" />
          <span className="text-xl font-semibold">24 &deg;C</span>
          <span className="text-lg font-semibold">Sunday, 2 Sep</span>
        </div>
        <div className="flex items-center gap-10">
          <CloudyIcon className="w-12 h-12" />
          <span className="text-xl font-semibold">21 &deg;C</span>
          <span className="text-lg font-semibold">Saturday, 3 Sep</span>
        </div>
        <div className="flex items-center gap-10">
          <RainyIcon className="w-12 h-12" />
          <span className="text-xl font-semibold">18 &deg;C</span>
          <span className="text-lg font-semibold">Monday, 4 Sep</span>
        </div>
        <div className="flex items-center gap-10">
          <OvercastIcon className="w-12 h-12" />
          <span className="text-xl font-semibold">21 &deg;C</span>
          <span className="text-lg font-semibold">Tuesday, 5 Sep</span>
        </div>
      </div>
    </div>
  );
};
