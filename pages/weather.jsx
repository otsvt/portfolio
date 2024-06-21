"use client";
import { Poppins } from "next/font/google";
import { useBodyHeight } from "@/components/hooks/use-body-height";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function WeatherPage() {
  useBodyHeight();

  return <div className={`${poppins.variable}`}></div>;
}
