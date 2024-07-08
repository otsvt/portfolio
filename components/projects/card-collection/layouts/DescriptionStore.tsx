import { FC } from "react";
import { IDeck } from "../types/interfaces";
import clsx from "clsx";

export const DescriptionStore: FC<{ currentPack: IDeck }> = ({ currentPack }) => {
  return (
    <div className={clsx("w-[350px]", "flex flex-col items-start gap-4")}>
      <h3 className={clsx("border-b-4 rounded border-black", "text-4xl font-bold text-black/80")}>
        {currentPack.title}
      </h3>
      <div className="font-medium text-2xl text-black/60">{currentPack.description}</div>
    </div>
  );
};
