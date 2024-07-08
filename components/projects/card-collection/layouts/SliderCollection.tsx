import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel } from "swiper/modules";
import { Rarities } from "../types/enums";
import { ICard } from "../types/interfaces";
import { useHeightResize } from "../hooks/use-height-resize";
import { HpIcon } from "../icons/HpIcon";
import { DamageIcon } from "../icons/DamageIcon";
import "swiper/css";
import "swiper/css/grid";
import styles from "../styles/swiper-collection.module.scss";
import clsx from "clsx";

interface ISliderCollection {
  collection: ICard[];
  openCardModal: (card: ICard) => void;
}

export const SliderCollection: FC<ISliderCollection> = ({ collection, openCardModal }) => {
  const height = useHeightResize();
  const rows = height < 880 ? 1 : height > 1200 ? 3 : 2;

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      grid={{ rows: rows }}
      className={styles.swiper}
      modules={[Grid, Mousewheel]}
      mousewheel={true}
    >
      {collection.map((card: ICard, i: number) => {
        return (
          <SwiperSlide key={i} className={styles.slide}>
            <article
              onClick={() => {
                openCardModal(card);
              }}
              className={clsx(
                "relative",
                "h-[300px] w-[220px] p-2",
                "bg-[#434A4F]",
                "rounded-xl",
                "cursor-pointer",
                "hover:scale-110 transition-transform",
                card.rarity === Rarities.Common && "animate-commonCard",
                card.rarity === Rarities.Rare && "animate-rareCard",
                card.rarity === Rarities.Epic && "animate-epicCard",
                card.rarity === Rarities.Legend && "animate-legendCard"
              )}
            >
              <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
                <div
                  className={clsx("w-full h-full", "relative overflow-hidden", "rounded-xl", "bg-center bg-cover")}
                  style={{ backgroundImage: `${card.image}` }}
                >
                  <div
                    className={clsx(
                      "absolute top-0 right-0",
                      "w-9 h-16",
                      "flex flex-col justify-center items-center",
                      "border border-black/80",
                      "bg-[#FF4E4E] shadow-forWindow rounded-bl-2xl rounded-tr-xl"
                    )}
                  >
                    <span className="font-bold text-xl">{card.hp}</span>
                    <HpIcon className="w-4 h-4" />
                  </div>
                  <div
                    className={clsx(
                      "absolute bottom-0 left-0",
                      "w-9 h-16",
                      "flex flex-col justify-center items-center",
                      "border border-black/80",
                      "bg-[#F19B2B] shadow-forWindow rounded-bl-xl rounded-tr-2xl"
                    )}
                  >
                    <span className="font-bold text-xl">{card.damage}</span>
                    <DamageIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  "absolute top-2/3 right-0",
                  "w-40 h-8 py-1",
                  "shadow-forWindow rounded-tl-lg",
                  "border-y border-s border-black/80",
                  "flex justify-center items-center",
                  "font-bold text-lg text-white",
                  "truncate",
                  card.rarity === Rarities.Common && "bg-[#434A4F]",
                  card.rarity === Rarities.Rare && "bg-[#3B5D89]",
                  card.rarity === Rarities.Epic && "bg-[#853768]",
                  card.rarity === Rarities.Legend && "bg-[#B9821A]"
                )}
              >
                {card.title}
              </div>
              {card.amount !== 1 && (
                <div
                  className={clsx(
                    "absolute top-0 left-0 -translate-x-2 -translate-y-1",
                    "w-10 h-10",
                    "flex justify-center items-center",
                    "bg-[#2d6981]",
                    "shadow-forWindow rounded-full",
                    "border-2 border-white/60",
                    "font-bold text-xl text-white/80"
                  )}
                >
                  {card.amount}
                </div>
              )}
            </article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
