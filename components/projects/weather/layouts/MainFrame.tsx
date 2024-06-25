import React, { FC } from "react";
import clsx from "clsx";
import { IMainInfo } from "../types/interfeces";
import { capitalizeWords } from "../utils/capitalize-words";

interface IMainFrame {
  info: IMainInfo;
  isSuccess: boolean;
  isFetching: boolean;
}

export const MainFrame: FC<IMainFrame> = ({ info, isSuccess, isFetching }) => {
  const cityName = info?.city ? capitalizeWords(info.city) : "";

  return (
    <div
      className={clsx(
        "py-4 px-4 w-[540px]",
        "flex flex-col justify-center items-center gap-7",
        "shadow-weatherFrame rounded-[30px]",
        "bg-weatherFrame",
        info.isDay ? "text-black" : "text-white",
        "transition-all",
        "bg-center bg-no-repeat bg-cover",
        !isSuccess || isFetching ? "blur-sm" : ""
      )}
      style={{
        backgroundImage: info.isDay ? "url(/images/weather/bg-day.png)" : "url(/images/weather/bg-night.png)",
      }}
    >
      <h1 className="text-4xl font-bold">{info?.region || "Europe"}</h1>
      <div className="flex flex-col items-center gap-1">
        <span className="mb-6 text-6xl font-bold text-center">{isFetching ? "" : (isSuccess && cityName) || ""}</span>
        <span className="text-xl font-semibold">
          {info?.day}, {info?.number} {info?.month}
        </span>
      </div>
    </div>
  );
};
