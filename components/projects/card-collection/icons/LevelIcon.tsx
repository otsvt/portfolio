import React, { FC } from "react";

export const LevelIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M61.9491 30.6071C61.9491 47.4427 48.3008 61.0911 31.4651 61.0911C14.6295 61.0911 0.982178 47.4427 0.982178 30.6071C0.982178 13.7714 14.6295 0.123047 31.4651 0.123047C48.3008 0.123047 61.9491 13.7714 61.9491 30.6071Z"
        fill="currentColor"
      />
      <path d="M25.4927 18.0273V23.8078H29.2825V43.4844H36.1349V18.0273H25.4927Z" fill="black" />
      <path
        d="M6.44995 30.6071C6.44995 14.6932 18.6457 1.63016 34.1996 0.246948C33.2992 0.16684 32.387 0.123047 31.4652 0.123047C14.6296 0.123047 0.981201 13.7714 0.981201 30.6071C0.981201 47.4427 14.6296 61.0911 31.4652 61.0911C32.387 61.0911 33.2992 61.0473 34.1996 60.9672C18.6457 59.584 6.44995 46.5209 6.44995 30.6071Z"
        fill="black"
      />
    </svg>
  );
};