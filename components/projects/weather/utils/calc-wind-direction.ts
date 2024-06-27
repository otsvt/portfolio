import { WindDirection } from "../types/enums";

export const calcWindDirection = (code: number): WindDirection => {
  if (code === 0) return WindDirection.North;
  if (code <= 45) return WindDirection.Northeast;
  if (code <= 90) return WindDirection.East;
  if (code <= 135) return WindDirection.Southeast;
  if (code <= 180) return WindDirection.South;
  if (code <= 225) return WindDirection.Southwest;
  if (code <= 270) return WindDirection.West;
  if (code <= 315) return WindDirection.Northwest;

  return WindDirection.North;
};
