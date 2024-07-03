import React, { FC } from "react";
import { Profile } from "../uikit/Profile";
import clsx from "clsx";

export const Header: FC<{ basePath: string; title: string }> = ({ basePath, title }) => {
  return (
    <header
      className={clsx(
        "w-full pt-6 pb-8 px-4",
        "relative z-10",
        "shadow-2xl",
        "border-b-4 border-black/70",
        "overflow-hidden rounded-b-2xl",
        "before:absolute before:inset-0 before:bg-orange-900/60"
      )}
      style={{ backgroundImage: `url(${basePath}/images/card-collection/bg.png)` }}
    >
      <div className={clsx("max-w-7xl mx-auto relative z-10", "flex justify-between items-center")}>
        <h1 className="font-bold text-4xl text-white/70">{title}</h1>
        <Profile />
      </div>
    </header>
  );
};
