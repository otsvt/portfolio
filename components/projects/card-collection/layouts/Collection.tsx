import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useModal } from "../hooks/use-modal";
import { Pages } from "../types/enums";
import { ICard } from "../types/interfaces";
import { SliderCollection } from "./SliderCollection";
import { Modal } from "../uikit/Modal";
import { ButtonBack } from "../uikit/ButtonBack";

export const Collection: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentCard, setCurrentCard] = useState<ICard | null>(null);

  const collection = useSelector((state: RootState) => state.collection.collection);

  const openCardModal = (card: ICard) => {
    setCurrentCard(card);
    openModal();
  };

  const renderSlider = () =>
    collection.length ? (
      <SliderCollection collection={collection} openCardModal={openCardModal} />
    ) : (
      <span className="font-bold text-5xl text-black/50">There is nothing here yet</span>
    );

  return (
    <section className="h-full py-5 px-6">
      <header className="mb-10 text-right">
        <ButtonBack changePage={changePage} />
      </header>
      {renderSlider()}
      <Modal card={currentCard} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
