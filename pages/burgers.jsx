import localFont from "next/font/local";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { Burgers } from "@/components/projects/burgers/burgers";

const badrips = localFont({
  src: "../public/fonts/burgers/Badrips.woff2",
  display: "swap",
  variable: "--font-badrips",
});

const rock = localFont({
  src: "../public/fonts/burgers/Rockutten.woff2",
  display: "swap",
  variable: "--font-rock",
});

const lies = localFont({
  src: "../public/fonts/burgers/TrueLies.woff2",
  display: "swap",
  variable: "--font-lies",
});

export default function BurgersPage() {
  useBodyHeight();

  return (
    <div className={`${badrips.variable} ${rock.variable} ${lies.variable}`}>
      <Burgers />
    </div>
  );
}
