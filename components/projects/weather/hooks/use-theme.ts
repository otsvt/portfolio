import { useEffect, useState } from "react";
import { Themes } from "../types/enums";

export const useTheme = () => {
  const [theme, setTheme] = useState(Themes.Dark);

  useEffect(() => {
    theme === Themes.Dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    return () => document.documentElement.classList.remove("dark");
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev === Themes.Dark ? Themes.Light : Themes.Dark));
  };

  return { theme, changeTheme };
};
