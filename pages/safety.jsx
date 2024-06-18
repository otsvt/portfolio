import localFont from "next/font/local";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { Safety } from "@/components/projects/safety/safety";

const honey = localFont({
  src: "../public/fonts/safety/HoneySoSweety.woff2",
  display: "swap",
  variable: "--font-honey",
});

const phobby = localFont({
  src: "../public/fonts/safety/Phobby.woff2",
  display: "swap",
  variable: "--font-phobby",
});

const pretty = localFont({
  src: "../public/fonts/safety/PrettyBurger.woff2",
  display: "swap",
  variable: "--font-pretty",
});

export default function SafetyPage() {
  useBodyHeight();

  return (
    <div className={`${honey.variable} ${phobby.variable} ${pretty.variable}`}>
      <Safety />
    </div>
  );
}
