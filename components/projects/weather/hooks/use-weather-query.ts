import { SyntheticEvent, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { CITIES } from "../data/cities";
import { getWeather } from "../utils/get-weather";

export const useWeatherQuery = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, error, isSuccess, isFetching, refetch } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const city = inputRef.current?.value.trim();
      if (city) {
        const response = await getWeather(city);
        return response.data;
      }
      return null;
    },
    enabled: false,
  });

  const isUpdating = !isSuccess || isFetching;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputRef.current?.value.trim() === "") return;
    refetch();
  };

  const getRandomData = () => {
    const randomIdex = Math.floor(Math.random() * CITIES.length);

    if (inputRef.current) {
      inputRef.current.value = CITIES[randomIdex];
      refetch();
    }
  };

  return { data, error, isUpdating, inputRef, handleSubmit, getRandomData };
};
