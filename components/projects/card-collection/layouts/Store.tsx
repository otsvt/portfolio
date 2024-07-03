import React, { FC, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Pages } from "../types/enums";
import { decks } from "../data/decks";
import { ButtonBack } from "../uikit/ButtonBack";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "../styles/swiper-store.module.scss";
import clsx from "clsx";

export const Store: FC<{ basePath: string; changePage: (page: Pages) => void }> = ({ basePath, changePage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="h-full py-5">
      <header className="mb-5 text-right">
        <ButtonBack changePage={changePage} />
      </header>
      <div className="relative">
        <Swiper
          onSlideChange={handleSlideChange}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={styles.swiper}
        >
          {decks.map((deck, i) => {
            return (
              <SwiperSlide key={i} className={styles.slide}>
                <article
                  className={clsx(
                    "w-[400px] h-[550px]",
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
        <div className="absolute top-0 left-40">{decks[activeIndex].description}</div>
      </div>
    </section>
  );
};
