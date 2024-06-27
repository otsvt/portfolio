"use client";
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

export const Weather: FC<{ basePath: string }> = ({ basePath }) => {
  const { theme, changeTheme } = useTheme();
  const { data, error, inputRef, isUpdating, handleSubmit, getRandomData } = useWeatherQuery();

  const mainInfo: Partial<IMainInfo> = getMainInfo(data, inputRef.current?.value);
  const detailsInfo: Partial<IDetailsInfo> = getDetailsInfo(data);
  const hourlyInfo: IHourlyInfo[] = getHourlyInfo(data);
  const dailyInfo: IDailyInfo[] = getDailyInfo(data);

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
        <MainFrame basePath={basePath} info={mainInfo} isUpdating={isUpdating} />
        <DetailsFrame theme={theme} info={detailsInfo} isUpdating={isUpdating} />
      </Frames>
      <Frames>
        <WeekFrame info={dailyInfo} isUpdating={isUpdating} />
        <HourlyFrame info={hourlyInfo} isUpdating={isUpdating} />
      </Frames>
    </Wrapper>
  );
};

const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      className={clsx(
        "p-10 font-poppins",
        "min-h-screen *:max-w-7xl *:mx-auto",
        "bg-weatherLight dark:bg-weatherDark transition-colors"
      )}
    >
      {children}
    </div>
  );
};

const Frames: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <div className="flex justify-between gap-10 first-of-type:mb-10">{children}</div>;
};
