import React, { FC } from "react";
import { Pages } from "../types/enums";
import { ArrowIcon } from "../icons/ArrowIcon";
import { StoreIcon } from "../icons/StoreIcon";
import clsx from "clsx";

export const ButtonMenu: FC<{ changePage: (page: Pages) => void; page: Pages }> = ({ changePage, page }) => {
  return (
    <div className="flex items-center gap-5 group">
      <ArrowIcon className="w-[200px] text-black/50 group-hover:text-black/70 transition-colors" />
      <button onClick={() => changePage(page)} className="relative cursor-pointer">
        <StoreIcon className="w-[400px] fill-black/50 group-hover:fill-black/70 transition-colors" />
        <span
          className={clsx(
            "absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2",
            "font-bold text-3xl text-black/80",
            "group-hover:text-black transition-colors"
          )}
        >
          {page}
        </span>
      </button>
      <ArrowIcon className="w-[200px] text-black/50 group-hover:text-black/70 transition-colors" />
    </div>
  );
};
