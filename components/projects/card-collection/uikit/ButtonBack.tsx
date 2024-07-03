import React, { FC } from "react";
import Image from "next/image";
import { Pages } from "../types/enums";
import pointer from "../images/pointer.png";
import clsx from "clsx";

export const ButtonBack: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  return (
    <button
      onClick={() => changePage(Pages.Menu)}
      className={clsx("inline-flex items-center gap-4", "relative", "cursor-pointer group")}
    >
      <Image
        className="relative group-hover:-translate-x-1 transition-transform"
        src={pointer}
        alt="pointer"
        height={75}
        width={25}
      />
      <span className="font-bold text-4xl text-black/60 hover:text-black transition-colors">Back to menu</span>
    </button>
  );
};
