import React, { FC, PropsWithChildren } from "react";
import { useTheme } from "./hooks/use-theme";
import { useWeatherQuery } from "./hooks/use-weather-query";
import { IDailyInfo, IDetailsInfo, IHourlyInfo, IMainInfo } from "./types/interfeces";
import { getMainInfo } from "./utils/get-main-info";
import { getDetailsInfo } from "./utils/get-details-info";
import { getHourlyInfo } from "./utils/get-hourly-info";
import { getDailyInfo } from "./utils/get-daily-info";
import { Header } from "./layouts/Header";
import { MainFrame } from "./layouts/MainFrame";
import { DetailsFrame } from "./layouts/DetailsFrame";
import { WeekFrame } from "./layouts/WeekFrame";
import { HourlyFrame } from "./layouts/HourlyFrame";
import clsx from "clsx";

interface IWeather {
  basePath: string | "";
}

export const Weather: FC<IWeather> = ({ basePath }) => {
  const { theme, changeTheme } = useTheme();
  const { data, error, isSuccess, isFetching, inputRef, handleSubmit, getRandomData } = useWeatherQuery();

  const mainInfo: IMainInfo = getMainInfo(data, inputRef.current?.value);
  const detailsInfo: IDetailsInfo = getDetailsInfo(data);
  const hourlyInfo: IHourlyInfo[] = getHourlyInfo(data);
  const dailyInfo: IDailyInfo[] = getDailyInfo(data);

  console.log(dailyInfo);

  return (
    <Wrapper>
      <Header
        theme={theme}
        ref={inputRef}
        error={error}
        onChangeTheme={changeTheme}
        handleSubmit={handleSubmit}
        getRandomData={getRandomData}
      />
      <Frames>
        <MainFrame basePath={basePath} info={mainInfo} isSuccess={isSuccess} isFetching={isFetching} />
        <DetailsFrame theme={theme} info={detailsInfo} isSuccess={isSuccess} isFetching={isFetching} />
      </Frames>
      <Frames>
        <WeekFrame info={dailyInfo} isSuccess={isSuccess} isFetching={isFetching} />
        <HourlyFrame info={hourlyInfo} isSuccess={isSuccess} isFetching={isFetching} />
      </Frames>
    </Wrapper>
  );
};

const Wrapper: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div
      className={clsx(
        "px-10 py-10 font-poppins",
        "min-h-screen *:max-w-7xl *:mx-auto",
        "bg-weatherLight dark:bg-weatherDark transition-colors"
      )}
    >
      {children}
    </div>
  );
};

const Frames: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="flex justify-between gap-14 first-of-type:mb-10">{children}</div>;
};
