import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { addCard } from "../store/reducer";
import { useHeightResize } from "../hooks/use-height-resize";
import { useSlideIndex } from "../hooks/use-slide-index";
import { useModal } from "../hooks/use-modal";
import { Pages } from "../types/enums";
import { decks } from "../data/decks";
import { DescriptionStore } from "./DescriptionStore";
import { SliderStore } from "./SliderStore";
import { PaymentStore } from "./PaymentStore";
import { Modal } from "../uikit/Modal";
import { ButtonBack } from "../uikit/ButtonBack";

export const Store: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  const height = useHeightResize();
  const isPlainSize = height > 880;

  const [activeIndex, handleSlideChange] = useSlideIndex();
  const { isModalOpen, openModal, closeModal } = useModal();

  const coins = useSelector((state: RootState) => state.collection.coins);
  const lastAddedCard = useSelector((state: RootState) => state.collection.lastAddedCard);
  const dispatch = useDispatch();

  const currentPack = decks[activeIndex];
  const currentPackPrice = currentPack.price;
  const isEnoughCoins = coins >= currentPackPrice;

  const buyCard = () => {
    dispatch(addCard([activeIndex, currentPackPrice]));
    openModal();
  };

  return (
    <section className="h-full py-5 flex flex-col">
      <header className="text-right">
        <ButtonBack changePage={changePage} />
      </header>
      <div className="flex gap-8 grow pt-6 pb-14">
        <DescriptionStore currentPack={currentPack} />
        <SliderStore isPlainSize={isPlainSize} handleSlideChange={handleSlideChange} />
        <PaymentStore isEnoughCoins={isEnoughCoins} price={currentPackPrice} buyCard={buyCard} />
      </div>
      <Modal card={lastAddedCard} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
