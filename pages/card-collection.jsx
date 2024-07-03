"use client";
import { Ubuntu } from "next/font/google";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { CardCollection } from "@/components/projects/card-collection/CardCollection";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export default function CardCollectionPage({ basePath }) {
  useBodyHeight();

  return (
    <div className={`${ubuntu.variable}`}>
      <CardCollection basePath={basePath} />
    </div>
  );
}
