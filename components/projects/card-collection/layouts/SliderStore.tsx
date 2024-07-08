import React, { FC } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCards, Mousewheel } from "swiper/modules";
import { decks } from "../data/decks";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "../styles/swiper-store.module.scss";
import clsx from "clsx";

interface ISlider {
  isPlainSize: boolean;
  handleSlideChange: (swiper: SwiperClass) => void;
}

export const SliderStore: FC<ISlider> = ({ isPlainSize, handleSlideChange }) => {
  return (
    <Swiper
      onSlideChange={handleSlideChange}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Mousewheel]}
      mousewheel={true}
      className={styles.swiper}
    >
      {decks.map((deck, i) => {
        return (
          <SwiperSlide key={i} className={styles.slide}>
            <article
              className={clsx(
                isPlainSize ? "w-[390px] h-[580px]" : "w-[300px] h-[440px]",
                "bg-center bg-cover rounded-3xl",
                "hover:rotate-1 transition-transform",
                "animate-deck"
              )}
              style={{
                backgroundImage: `${deck.image}`,
              }}
            ></article>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
