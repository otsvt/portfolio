import React, { FC } from "react";
import { IIcon } from "../types/interfaces";

export const HpIcon: FC<IIcon> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 34 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34 9.96407C34 22.1583 17 34.5 17 34.5C17 34.5 0 22.1583 0 9.96407C0 3.05093 5.35434 0.500756 8.16986 0.500756C14.0564 0.500756 17 5.47102 17 5.47102C17 5.47102 19.9436 0.5 25.8301 0.5C28.6457 0.500756 34 3.05017 34 9.96407Z"
        fill="currentColor"
      />
    </svg>
  );
};
