import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useHeightResize } from "../hooks/use-height-resize";
import { useModal } from "../hooks/use-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel } from "swiper/modules";
import { Pages, Rarities } from "../types/enums";
import { ICard } from "../types/interfaces";
import { Modal } from "./Modal";
import { ButtonBack } from "../uikit/ButtonBack";
import { HpIcon } from "../icons/HpIcon";
import { DamageIcon } from "../icons/DamageIcon";
import "swiper/css";
import "swiper/css/grid";
import styles from "../styles/swiper-collection.module.scss";
import clsx from "clsx";

export const Collection: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  const collection = useSelector((state: RootState) => state.collection.collection);
  const rows = useHeightResize() ? 2 : 1;
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentCard, setCurrentCard] = useState<ICard | undefined>(undefined);

  return (
    <section className="h-full py-5 px-6">
      <header className="mb-10 text-right">
        <ButtonBack changePage={changePage} />
      </header>
      {collection.length ? (
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          grid={{ rows: rows }}
          className={styles.swiper}
          modules={[Grid, Mousewheel]}
          mousewheel={true}
        >
          {collection.map((card: ICard, i) => {
            return (
              <SwiperSlide key={i} className={styles.slide}>
                <article
                  onClick={() => {
                    setCurrentCard(card);
                    openModal();
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
      ) : (
        <span className="font-bold text-5xl text-black/50">There is nothing here yet</span>
      )}
      <Modal card={currentCard} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

{
  /* <SwiperSlide className={styles.slide}>
          <article
            onClick={openModal}
            className={clsx(
              "relative",
              "h-[300px] w-[220px] p-2",
              "bg-[#434A4F]",
              "rounded-xl animate-commonCard",
              "cursor-pointer",
              "hover:scale-110 transition-transform"
            )}
          >
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div
                className={clsx("w-full h-full", "relative overflow-hidden", "rounded-xl", "bg-center bg-cover")}
                style={{ backgroundImage: `url(images/card-collection/goblins/goblin-1.jpg)` }}
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
                  <span className="font-bold text-xl">3</span>
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
                  <span className="font-bold text-xl">3</span>
                  <DamageIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "absolute top-2/3 right-0",
                "w-40 h-8 py-1",
                "bg-[#434A4F] shadow-forWindow rounded-tl-lg",
                "border-y border-s border-black/80",
                "flex justify-center items-center",
                "font-bold text-lg text-white",
                "truncate"
              )}
            >
              Goblins Trio
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article
            onClick={openModal}
            className={clsx(
              "relative",
              "h-[300px] w-[220px] p-2",
              "bg-[#434A4F]",
              "rounded-xl animate-rareCard",
              "cursor-pointer",
              "hover:scale-110 transition-transform"
            )}
          >
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div
                className={clsx("w-full h-full", "relative overflow-hidden", "rounded-xl", "bg-center bg-cover")}
                style={{ backgroundImage: `url(images/card-collection/goblins/goblin-2.jpg)` }}
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
                  <span className="font-bold text-xl">1</span>
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
                  <span className="font-bold text-xl">4</span>
                  <DamageIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "absolute top-2/3 right-0",
                "w-40 h-8 py-1",
                "bg-[#3B5D89] shadow-forWindow rounded-tl-lg",
                "border-y border-s border-black/80",
                "flex justify-center items-center",
                "font-bold text-lg text-white",
                "truncate"
              )}
            >
              Goblin Hunter
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article
            onClick={openModal}
            className={clsx(
              "relative",
              "h-[300px] w-[220px] p-2",
              "bg-[#434A4F]",
              "rounded-xl animate-legendCard",
              "cursor-pointer",
              "hover:scale-110 transition-transform"
            )}
          >
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div
                className={clsx("w-full h-full", "relative overflow-hidden", "rounded-xl", "bg-center bg-cover")}
                style={{ backgroundImage: `url(images/card-collection/orcs/orc-2.jpg)` }}
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
                  <span className="font-bold text-xl">11</span>
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
                  <span className="font-bold text-xl">8</span>
                  <DamageIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "absolute top-2/3 right-0",
                "w-40 h-8 py-1",
                "bg-[#B9821A] shadow-forWindow rounded-tl-lg",
                "border-y border-s border-black/80",
                "flex justify-center items-center",
                "font-bold text-lg text-white",
                "truncate"
              )}
            >
              Orc King
            </div>
          </article>
        </SwiperSlide> */
}
