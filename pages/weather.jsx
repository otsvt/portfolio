"use client";
import { Poppins } from "next/font/google";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { Weather } from "@/components/projects/weather/Weather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const queryClient = new QueryClient();

export default function WeatherPage({ basePath }) {
  useBodyHeight();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${poppins.variable}`}>
        <Weather basePath={basePath} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
