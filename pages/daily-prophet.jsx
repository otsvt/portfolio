"use client";
import localFont from "next/font/local";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { DailyProphet } from "@/components/projects/daily-prophet/daily-prophet";

const anima = localFont({
  src: "../public/fonts/daily-prophet/animales-fantastic.woff2",
  display: "swap",
  variable: "--font-anima",
});

const dumbledor = localFont({
  src: "../public/fonts/daily-prophet/dumbledor-2-2.woff2",
  display: "swap",
  variable: "--font-dumbledor",
});

const hp = localFont({
  src: "../public/fonts/daily-prophet/harry-potter-2.woff2",
  display: "swap",
  variable: "--font-hp",
});

const harrypotter = localFont({
  src: "../public/fonts/daily-prophet/harrypotter7.woff2",
  display: "swap",
  variable: "--font-harrypotter",
});

const wizards = localFont({
  src: "../public/fonts/daily-prophet/hogvartskiy-volshebnik.woff2",
  display: "swap",
  variable: "--font-wizards",
});

const lumos = localFont({
  src: "../public/fonts/daily-prophet/lumos-2.woff2",
  display: "swap",
  variable: "--font-lumos",
});

const muggle = localFont({
  src: "../public/fonts/daily-prophet/mugglenews_by_nathanthenerd_d41qn8p.woff2",
  display: "swap",
  variable: "--font-muggle",
});

const romance = localFont({
  src: "../public/fonts/daily-prophet/romance-fatal-prima.woff2",
  display: "swap",
  variable: "--font-romance",
});

const wolfpack = localFont({
  src: "../public/fonts/daily-prophet/wolfpack-halloweed.woff2",
  display: "swap",
  variable: "--font-wolfpack",
});

const fonts = `
  ${anima.variable} ${dumbledor.variable} ${hp.variable}
  ${harrypotter.variable} ${wizards.variable} ${lumos.variable}
  ${muggle.variable} ${romance.variable} ${wolfpack.variable}
`;

export default function DailyProphetPage({ basePath }) {
  useBodyHeight();

  return (
    <div className={fonts}>
      <DailyProphet basePath={basePath} />
    </div>
  );
}
