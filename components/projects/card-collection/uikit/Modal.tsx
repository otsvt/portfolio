import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../store/reducer";
import { Rarities } from "../types/enums";
import { ICard } from "../types/interfaces";
import { HpIcon } from "../icons/HpIcon";
import { DamageIcon } from "../icons/DamageIcon";
import { SprayIcon } from "../icons/SprayIcon";
import { DustIcon } from "../icons/DustIcon";
import clsx from "clsx";

interface IModal {
  isOpen: boolean;
  card: ICard | null;
  onClose: () => void;
}

export const Modal: FC<IModal> = ({ isOpen, card, onClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (!target.closest("[data-id=modal]")) onClose();
  };

  const sprayCard = (cost: number, title: string) => {
    dispatch(deleteCard([cost, title]));
    onClose();
  };

  return (
    <div
      onClick={handleClick}
      className={clsx("py-10", "fixed inset-0 z-50", "flex justify-center items-center flex-1", "backdrop-blur-md")}
    >
      <div
        data-id="modal"
        className={clsx(
          "p-5",
          "border-2 border-black/60",
          "bg-[#B6A774] shadow-forWindow rounded-2xl",
          card?.rarity === Rarities.Common && "animate-commonCard",
          card?.rarity === Rarities.Rare && "animate-rareCard",
          card?.rarity === Rarities.Epic && "animate-epicCard",
          card?.rarity === Rarities.Legend && "animate-legendCard"
        )}
      >
        <div className={clsx("flex gap-5", "rounded-2xl border-2 border-black/60 overflow-hidden")}>
          <article className={clsx("h-[600px] w-[440px] p-4", "bg-[#434A4F] rounded-xl")}>
            <div className={clsx("w-full, h-full p-2", "bg-[#D9DBD7]", "rounded-xl")}>
              <div
                className={clsx("w-full h-full", "relative overflow-hidden", "rounded-xl", "bg-center bg-cover")}
                style={{ backgroundImage: `${card?.image}` }}
              ></div>
            </div>
          </article>
          <div className={clsx("h-[600px] py-4 pr-4", "flex justify-center items-center", "rounded-2xl ")}>
            <div className={clsx("p-4", "flex flex-col justify-center")}>
              <h2
                className={clsx("self-start font-bold text-4xl text-black/90", "border-b-4 border-black/60 rounded-b")}
              >
                {card?.title}
              </h2>
              <span
                className={clsx(
                  "mb-2",
                  "font-bold text-xl",
                  card?.rarity === Rarities.Common && "text-[#434A4F]",
                  card?.rarity === Rarities.Rare && "text-[#3B5D89]",
                  card?.rarity === Rarities.Epic && "text-[#853768]",
                  card?.rarity === Rarities.Legend && "text-[#B9821A]"
                )}
              >
                ({card?.rarity})
              </span>
              <span className={clsx("mb-10", "font-bold text-3xl text-black/80")}>{card?.pack}</span>
              <div className={clsx("mb-10 max-w-[440px]", "font-medium text-2xl text-black/80")}>
                {card?.description}
              </div>
              <div className="mb-14 flex gap-10">
                <div className="flex items-center gap-4">
                  <HpIcon className="w-8 h-8 text-[#FF4E4E] stroke-1 stroke-black" />
                  <span className="font-bold text-3xl">{card?.hp}</span>
                </div>
                <div className="flex items-center gap-4">
                  <DamageIcon className="w-8 h-8 text-[#F19B2B] stroke-1 stroke-black" />
                  <span className="font-bold text-3xl">{card?.damage}</span>
                </div>
              </div>
              <div className="self-end flex flex-col items-center gap-4">
                <div className={clsx("py-1 px-3", "flex items-center gap-2", "rounded", "border-b-4 border-black/60")}>
                  <span className="font-bold text-2xl text-black/80">You will receive: {card?.sprayCost}</span>
                  <DustIcon className="w-8 h-8" />
                </div>
                <button
                  onClick={() => sprayCard(card!.sprayCost, card!.title)}
                  className={clsx("relative", "text-3xl font-bold group")}
                >
                  <SprayIcon className="w-[320px] fill-black/50 group-hover:fill-black/80 transition-colors" />
                  <span
                    className={clsx(
                      "absolute top-6 right-1/2 translate-x-1/2 ",
                      "font-bold text-2xl text-black/80",
                      "group-hover:text-black transition-colors"
                    )}
                  >
                    Spray
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
