import React, { FC, SyntheticEvent, forwardRef } from "react";
import { SearchIcon } from "../icons/Search";
import { LocationIcon } from "../icons/Location";
import { Themes } from "../types/enums";
import clsx from "clsx";

interface IHeader {
  theme: string;
  error: Error | null;
  onChangeTheme: () => void;
  getRandomData: () => void;
  handleSubmit: (e: SyntheticEvent) => void;
}

export const Header: FC<IHeader & React.RefAttributes<HTMLInputElement>> = forwardRef<HTMLInputElement, IHeader>(
  ({ theme, error, onChangeTheme, handleSubmit, getRandomData }, ref) => {
    return (
      <header className="mb-10 flex justify-between gap-20">
        <div className="grid gap-1 items-center">
          <button
            onClick={onChangeTheme}
            className={clsx(
              "w-[102px] h-[38px]",
              "relative",
              "bg-[rgb(217,217,217)] rounded-[40px]",
              "border border-black"
            )}
          >
            <span
              className={clsx(
                "w-[30px] h-[30px]",
                "inline-block absolute top-[4px]",
                "bg-black rounded-full",
                "transition-all ease-in-out",
                theme === Themes.Dark ? "right-3" : "right-[60px]"
              )}
            ></span>
          </button>
          <span
            className={clsx("-mb-2", "text-lg font-extrabold", theme === Themes.Dark ? "text-gray-50" : "text-black")}
          >
            {theme} Mode
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex grow gap-20">
          <label
            className={clsx(
              "relative",
              "py-2 px-8",
              "flex grow justify-between items-center gap-7",
              "rounded-[40px] dark:bg-weatherFrame shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)]",
              "border",
              error ? "border-red-600/80" : "border-black dark:border-transparent"
            )}
          >
            <input
              ref={ref}
              className={clsx(
                "w-full",
                "placeholder:text-weatherLight  dark:placeholder:text-[rgba(255,255,255,0.6)]",
                "text-lg dark:text-white",
                "bg-transparent outline-none"
              )}
              placeholder="Search for your preffered city..."
              type="text"
            />
            <button>
              <SearchIcon className="fill-[#9E9E9D] hover:fill-black dark:hover:fill-white transition-colors" />
            </button>
            <span
              className={clsx(
                "absolute -top-7 right-1/2 translate-x-1/2",
                "font-semibold text-red-600/80 text-nowrap",
                error ? "block" : "hidden",
                error && "animate-error transition-transform"
              )}
            >
              Someting was wrong. Please enter a correct name
            </span>
          </label>
          <button
            type="button"
            onClick={getRandomData}
            className={clsx(
              "py-3 px-6 relative",
              "flex items-center gap-1",
              "text-black dark:text-white/80 text-lg font-extrabold",
              "hover:bg-[#D9D9D9] dark:hover:bg-[#353535] transition-colors",
              "rounded-[40px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)]",
              "border border-black dark:border-transparent"
            )}
          >
            Random Location
            <LocationIcon className="fill-black dark:fill-white" />
          </button>
        </form>
      </header>
    );
  }
);
Header.displayName = "Header";
