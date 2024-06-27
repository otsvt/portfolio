import { WeatherTypes } from "../types/enums";
import { CloudyIcon } from "../icons/weather/Cloudy";
import { OvercastIcon } from "../icons/weather/Overcast";
import { RainyIcon } from "../icons/weather/Rainy";
import { SunnyIcon } from "../icons/weather/Sunny";

export const renderIcon = (type: string | undefined, className: string) => {
  if (type === WeatherTypes.Sunny) return <SunnyIcon className={className} />;
  if (type === WeatherTypes.Cloudy) return <CloudyIcon className={className} />;
  if (type === WeatherTypes.Overcast) return <OvercastIcon className={className} />;
  if (type === WeatherTypes.Rainy) return <RainyIcon className={className} />;
  return <SunnyIcon className={className} />;
};
