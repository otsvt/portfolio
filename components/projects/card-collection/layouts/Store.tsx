import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addCard } from "../store/reducer";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useHeightResize } from "../hooks/use-height-resize";
import { useSlideIndex } from "../hooks/use-slide-index";
import { useModal } from "../hooks/use-modal";
import { Pages } from "../types/enums";
import { decks } from "../data/decks";
import { Modal } from "./Modal";
import { ButtonBack } from "../uikit/ButtonBack";
import { CoinIcon } from "../icons/CoinIcon";
import { BuyIcon } from "../icons/BuyIcon";
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "../styles/swiper-store.module.scss";
import clsx from "clsx";

export const Store: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  const isPlainSize = useHeightResize();
  const { activeIndex, handleSlideChange } = useSlideIndex();
  const { isModalOpen, openModal, closeModal } = useModal();

  const lastAddedCard = useSelector((state: RootState) => state.collection.lastAddedCard);
  const dispatch = useDispatch();

  const buyCard = () => {
    dispatch(addCard([activeIndex, decks[activeIndex].price]));
    openModal();
  };

  return (
    <section className="h-full py-5">
      <header className="mb-14 text-right">
        <ButtonBack changePage={changePage} />
      </header>
      <div className="flex gap-8">
        <Description activeIndex={activeIndex} />
        <Slider isPlainSize={isPlainSize} handleSlideChange={handleSlideChange} />
        <Payment activeIndex={activeIndex} buyCard={buyCard} />
      </div>
      <Modal card={lastAddedCard} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

const Description: FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <div className={clsx("w-[350px]", "flex flex-col items-start gap-4")}>
      <h3 className={clsx("border-b-4 rounded border-black", "text-4xl font-bold text-black/80")}>
        {decks[activeIndex].title}
      </h3>
      <div className="font-medium text-2xl text-black/60">{decks[activeIndex].description}</div>
    </div>
  );
};

const Slider: FC<{ isPlainSize: boolean; handleSlideChange: (swiper: SwiperClass) => void }> = ({
  isPlainSize,
  handleSlideChange,
}) => {
  return (
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

const Payment: FC<{ activeIndex: number; buyCard: () => void }> = ({ activeIndex, buyCard }) => {
  return (
    <div className={clsx("self-end", "flex flex-col items-center")}>
      <div className={clsx("py-1 px-3", "flex items-center gap-2", "rounded", "border-b-4 border-black/60")}>
        <span className="font-bold text-3xl text-black/80">Price: {decks[activeIndex].price}</span>
        <CoinIcon className="w-10 h-10" />
      </div>
      <button onClick={buyCard} className={clsx("relative", "text-3xl font-bold group")}>
        <BuyIcon className="w-[400px] fill-black/50 group-hover:fill-black/80 transition-colors" />
        <span
          className={clsx(
            "absolute top-8 right-1/2 translate-x-1/2 ",
            "font-bold text-3xl text-black/80",
            "group-hover:text-black transition-colors"
          )}
        >
          Buy
        </span>
      </button>
    </div>
  );
};
