import Image from "next/image";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { LevelIcon } from "../icons/LevelIcon";
import { CoinIcon } from "../icons/CoinIcon";
import { DustIcon } from "../icons/DustIcon";
import avatar from "../images/avatar.jpg";
import clsx from "clsx";

export const Profile: FC = () => {
  const coins = useSelector((state: RootState) => state.collection.coins);
  const dust = useSelector((state: RootState) => state.collection.dust);

  return (
    <div className="flex items-center gap-4">
      <div className="grid gap-1">
        <div
          className={clsx(
            "px-3",
            "flex justify-between items-center gap-2",
            "border-2 border-black/80",
            "rounded-2xl shadow-forWindow",
            "bg-[#C3B189]"
          )}
        >
          <span className="font-bold text-xl w-14 text-black">{coins}</span>
          <CoinIcon className="w-5 h-5" />
        </div>
        <div
          className={clsx(
            "px-3",
            "flex justify-between items-center gap-2",
            "border-2 border-black/80",
            "rounded-2xl shadow-forWindow",
            "bg-[#C3B189]"
          )}
        >
          <span className="font-bold text-xl w-14 text-black">{dust}</span>
          <DustIcon className="w-5 h-5" />
        </div>
      </div>
      <div className="relative rounded-full border-2 border-white/60 shadow-forWindow">
        <Image className="rounded-full w-16 h-16" src={avatar} alt="avatar" height={100} width={100} />
        <LevelIcon className="w-8 h-8 absolute -bottom-2 -right-2 text-[#C3B189]" />
      </div>
    </div>
  );
};
