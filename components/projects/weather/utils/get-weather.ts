import axios from "axios";

export const getWeather = async (city: string) => {
  const location = await axios(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
  );

  const latitude = location?.data?.results[0].latitude;
  const longitude = location?.data?.results[0].longitude;

  return axios(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,surface_pressure,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset,uv_index_max&timezone=auto`
  );
};
