"use client";
import { Roboto } from "next/font/google";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { TicTacToe } from "@/components/projects/tic-tac-toe/tic-tac-toe";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function TicTacToePage() {
  useBodyHeight();

  return (
    <div className={`${roboto.variable}`}>
      <TicTacToe />
      <div id="modals"></div>
    </div>
  );
}
