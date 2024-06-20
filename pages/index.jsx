"use client";
import { Raleway, Outfit } from "next/font/google";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { Portfolio } from "@/components/portfolio/portfolio";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export default function HomePage({ basePath }) {
  useBodyHeight();

  return (
    <div className={`${raleway.variable} ${outfit.variable}`}>
      <Portfolio basePath={basePath} />
    </div>
  );
}
