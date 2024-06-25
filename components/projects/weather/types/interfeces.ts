import { Coordinate } from "./types";

export interface IIcon {
  className?: string;
}

export interface ILocationState {
  location: { latitude: Coordinate; longitude: Coordinate };
  error: string | null;
}

export interface IMainInfo {
  region?: string;
  city?: string;
  day: string;
  number: number;
  month: string;
  time: string;
  isDay: boolean;
}
