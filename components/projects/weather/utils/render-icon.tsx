import { WeatherTypes } from "../types/enums";
import { CloudyIcon } from "../icons/weather/Cloudy";
import { OvercastIcon } from "../icons/weather/Overcast";
import { RainyIcon } from "../icons/weather/Rainy";
import { SunnyIcon } from "../icons/weather/Sunny";

export const renderIcon = (type: string, className: string) => {
  const RenderIcon =
    {
      [WeatherTypes.Sunny]: SunnyIcon,
      [WeatherTypes.Cloudy]: CloudyIcon,
      [WeatherTypes.Overcast]: OvercastIcon,
      [WeatherTypes.Rainy]: RainyIcon,
    }[type] ?? SunnyIcon;

  return <RenderIcon className={className} />;
};
