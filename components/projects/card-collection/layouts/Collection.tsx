import React, { FC } from "react";
import { useHeightResize } from "../hooks/use-height-resize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel } from "swiper/modules";
import { Pages } from "../types/enums";
import { ButtonBack } from "../uikit/ButtonBack";
import "swiper/css";
import "swiper/css/grid";
import styles from "../styles/swiper-collection.module.scss";
import clsx from "clsx";

export const Collection: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  const rows = useHeightResize();

  return (
    <section className="h-full py-5 px-6">
      <header className="mb-10 text-right">
        <ButtonBack changePage={changePage} />
      </header>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        grid={{ rows: rows }}
        className={styles.swiper}
        modules={[Grid, Mousewheel]}
        mousewheel={true}
      >
        <SwiperSlide className={styles.slide}>
          <article
            className={clsx(
              "h-[300px] w-[220px] p-2",
              "bg-[#434A4F]",
              "rounded-xl animate-commonCard",
              "cursor-pointer",
              "hover:scale-110 transition-transform"
            )}
          >
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div className={clsx("w-full h-full", "bg-fuchsia-300", "rounded-xl")}></div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article
            className={clsx(
              "h-[300px] w-[220px] p-2",
              "bg-[#434A4F]",
              "rounded-xl animate-rareCard",
              "cursor-pointer",
              "hover:scale-110 transition-transform"
            )}
          >
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div className={clsx("w-full h-full", "bg-fuchsia-300", "rounded-xl")}></div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article
            className={clsx(
              "h-[300px] w-[220px] p-2",
              "bg-[#434A4F]",
              "rounded-xl animate-epicCard",
              "cursor-pointer",
              "hover:scale-110 transition-transform"
            )}
          >
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div className={clsx("w-full h-full", "bg-fuchsia-300", "rounded-xl")}></div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article
            className={clsx(
              "h-[300px] w-[220px] p-2",
              "bg-[#434A4F]",
              "rounded-xl animate-legendCard",
              "cursor-pointer",
              "hover:scale-110 transition-transform"
            )}
          >
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div className={clsx("w-full h-full", "bg-fuchsia-300", "rounded-xl")}></div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
