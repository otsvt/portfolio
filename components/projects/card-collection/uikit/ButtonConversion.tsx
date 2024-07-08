import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { convertDust } from "../store/reducer";
import { ConvertIcon } from "../icons/ConvertIcon";
import clsx from "clsx";

export const ButtonConversion: FC = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(convertDust())}
      className={clsx(
        "p-1",
        "flex justify-center items-center",
        "border-2 border-black/80",
        "rounded-full shadow-forWindow transition-colors",
        "bg-[#C3B189] hover:bg-[#e5bf6b]"
      )}
    >
      <ConvertIcon className="w-6 h-6" />
    </button>
  );
};
