"use client";
import { Roboto } from "next/font/google";
import { useBodyHeight } from "@/components/hooks/use-body-height";
import { Community } from "@/components/projects/community/Community";
import { Provider } from "react-redux";
import { store } from "../components/projects/community/store/store.ts";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function CommunityPage() {
  useBodyHeight();

  return (
    <Provider store={store}>
      <div className={`${roboto.variable}`}>
        <Community />
      </div>
    </Provider>
  );
}
