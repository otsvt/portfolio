import React, { FC } from "react";
import { IMainInfo } from "../types/interfeces";
import { capitalizeWords } from "../utils/capitalize-words";
import clsx from "clsx";

interface IMainFrame {
  basePath: string;
  info: IMainInfo;
  isUpdating: boolean;
}

export const MainFrame: FC<IMainFrame> = ({ basePath, info, isUpdating }) => {
  const cityName = info.city ? capitalizeWords(info.city) : "";

  return (
    <div
      className={clsx(
        "py-4 px-4 w-[540px]",
        "flex flex-col justify-center items-center gap-7",
        "shadow-weatherFrame rounded-[30px]",
        "bg-weatherFrame",
        "transition-all overflow-hidden",
        "bg-center bg-no-repeat bg-cover",
        info.isDay ? "text-black" : "text-white",
        isUpdating ? "blur-sm" : ""
      )}
      style={{
        backgroundImage: info.isDay
          ? `url(${basePath}/images/weather/bg-day.png)`
          : `url(${basePath}/images/weather/bg-night.png)`,
      }}
    >
      <h1 className="text-2xl xl:text-4xl font-bold truncate">{info.region || "Europe"}</h1>
      <div className="flex flex-col items-center gap-1">
        <span className="mb-6 text-3xl xl:text-6xl font-bold text-center">{isUpdating ? "" : cityName}</span>
        <span className="text-lg xl:text-xl font-semibold">
          {info.day && info.day + ","} {info.number} {info.month}
        </span>
      </div>
    </div>
  );
};
