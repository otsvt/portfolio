import Image from "next/image";
import React, { FC } from "react";
import { Themes, WeatherTypes } from "../types/enums";
import { IDetailsInfo } from "../types/interfeces";
import sunriseWhiteIcon from "../images/sunrise-white.png";
import sunriseBlackIcon from "../images/sunrise-black.png";
import sunsetWhiteIcon from "../images/sunset-white.png";
import sunsetBlackIcon from "../images/sunset-black.png";
import humidityWhiteIcon from "../images/humidity-white.png";
import humidityBlackIcon from "../images/humidity-black.png";
import pressureBlackIcon from "../images/pressure-black.png";
import pressureWhiteIcon from "../images/pressure-white.png";
import uvBlackIcon from "../images/uv-black.png";
import uvWhiteIcon from "../images/uv-white.png";
import windBlackIcon from "../images/wind-black.png";
import windWhiteIcon from "../images/wind-white.png";
import { SunnyIcon } from "../icons/weather/Sunny";
import clsx from "clsx";
import { CloudyIcon } from "../icons/weather/Cloudy";
import { OvercastIcon } from "../icons/weather/Overcast";
import { RainyIcon } from "../icons/weather/Rainy";

interface IDetails {
  theme: string;
  info: IDetailsInfo;
  isSuccess: boolean;
  isFetching: boolean;
}

export const DetailsFrame: FC<IDetails> = ({ theme, info, isSuccess, isFetching }) => {
  return (
    <div
      className={clsx(
        "p-6",
        "flex grow justify-between gap-x-12",
        "shadow-weatherFrame rounded-[30px]",
        "bg-white dark:bg-weatherFrame",
        "text-black dark:text-white",
        "transition-all",
        !isSuccess || isFetching ? "blur-sm" : ""
      )}
    >
      <LeftDetails theme={theme} info={info} />
      <MainDetails info={info} />
      <RightDetails theme={theme} info={info} />
    </div>
  );
};

interface ILeftDetails {
  theme: string;
  info: IDetailsInfo;
}

const LeftDetails: FC<ILeftDetails> = ({ theme, info }) => {
  return (
    <div className="grid gap-4">
      <div
        className={clsx(
          "w-[190px]",
          "grid gap-1",
          "bg-clip-text text-transparent bg-gradient-to-r",
          "from-black to-slate-200 dark:from-slate-200 dark:to-zinc-600"
        )}
      >
        <span className="text-7xl font-bold text-nowrap">{info.temp || "22"} &deg;C</span>
        <span className="text-xl font-semibold">
          Feels like: <b className="text-3xl">{info.apparentTemp || "21"} &deg;C</b>
        </span>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-3">
          <Image src={theme === Themes.Dark ? sunriseWhiteIcon : sunriseBlackIcon} alt="icon" height={48} width={48} />
          <div>
            <h3 className="text-xl font-semibold">Sunrise</h3>
            <span>{info.sunrise || "06:00"} AM</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src={theme === Themes.Dark ? sunsetWhiteIcon : sunsetBlackIcon} alt="icon" height={48} width={48} />
          <div>
            <h3 className="text-xl font-semibold">Sunset</h3>
            <span>{info.sunset || "22:15"} PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IMainDetails {
  info: IDetailsInfo;
}

const MainDetails: FC<IMainDetails> = ({ info }) => {
  const renderIcon = (type: string | undefined) => {
    if (type === WeatherTypes.Sunny) return <SunnyIcon className="h-40 w-40" />;
    if (type === WeatherTypes.Cloudy) return <CloudyIcon className="h-40 w-40" />;
    if (type === WeatherTypes.Overcast) return <OvercastIcon className="h-40 w-40" />;
    if (type === WeatherTypes.Rainy) return <RainyIcon className="h-40 w-40" />;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {renderIcon(info.weather) || <SunnyIcon className="h-40 w-40" />}
      <span className="mt-auto text-3xl font-semibold">{info.weather || "Sunny"}</span>
    </div>
  );
};

interface IRightDetails {
  theme: string;
  info: IDetailsInfo;
}

const RightDetails: FC<IRightDetails> = ({ theme, info }) => {
  return (
    <div className="w-[185px] grid grid-cols-2 items-center  gap-4">
      <div className="flex flex-col items-center">
        <Image
          className="h-12 w-12"
          src={theme === Themes.Dark ? humidityWhiteIcon : humidityBlackIcon}
          alt="icon"
          height={100}
          width={100}
        />
        <span className="mt-2 text-lg font-semibold">{info.humidity || "41"}%</span>
        <span className="text-sm font-medium">Humidity</span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="h-12 w-12"
          src={theme === Themes.Dark ? windWhiteIcon : windBlackIcon}
          alt="icon"
          height={100}
          width={100}
        />
        <span className="mt-2 text-lg font-semibold">{info.windSpeed || "2"}km/h</span>
        <span className="text-sm font-medium text-nowrap">Wind Speed</span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="h-12 w-12"
          src={theme === Themes.Dark ? pressureWhiteIcon : pressureBlackIcon}
          alt="icon"
          height={100}
          width={100}
        />
        <span className="mt-2 text-lg font-semibold">{info.pressure || "997"}hPa</span>
        <span className="text-sm font-medium">Pressure</span>
      </div>
      <div className="flex flex-col items-center">
        <Image
          className="h-12 w-12"
          src={theme === Themes.Dark ? uvWhiteIcon : uvBlackIcon}
          alt="icon"
          height={100}
          width={100}
        />
        <span className="mt-2 text-lg font-semibold">{info.uv || "8"}</span>
        <span className="text-sm font-medium">UV</span>
      </div>
    </div>
  );
};
