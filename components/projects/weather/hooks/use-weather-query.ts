import { SyntheticEvent, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { cities } from "../data/cities";
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

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    refetch();
  };

  const getRandomData = () => {
    const randomIdex = Math.floor(Math.random() * cities.length);

    if (inputRef.current) {
      inputRef.current.value = cities[randomIdex];
      refetch();
    }
  };

  return { data, error, isSuccess, isFetching, inputRef, handleSubmit, getRandomData };
};
