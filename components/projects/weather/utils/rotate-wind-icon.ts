import { WindDirection } from "../types/enums";

export const rotateWindIcon = (windDirection: string) => {
  if (windDirection === WindDirection.Northeast) return "rotate-45";
  if (windDirection === WindDirection.East) return "rotate-90";
  if (windDirection === WindDirection.Southeast) return "rotate-[135geg]";
  if (windDirection === WindDirection.South) return "rotate-180";
  if (windDirection === WindDirection.Southwest) return "-rotate-[135deg]";
  if (windDirection === WindDirection.West) return "-rotate-90";
  if (windDirection === WindDirection.Northwest) return "-rotate-45";
};
