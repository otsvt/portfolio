import localFont from "next/font/local";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { Gallery } from "@/components/projects/gallery/gallery";

const ebg = localFont({
  src: [
    {
      path: "../public/fonts/gallery/EBGaramond-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gallery/EBGaramond-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-ebg",
});

export default function GalleryPage() {
  useBodyHeight();

  return (
    <div className={ebg.className}>
      <Gallery />
    </div>
  );
}
