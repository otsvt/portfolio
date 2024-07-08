import { ICollectionState, ICard } from "../types/interfaces";

export const addCardToCollection = (state: ICollectionState, pack: ICard[], price: number) => {
  state.coins -= price;

  const randomIndex = Math.floor(Math.random() * pack.length);
  const newCard = pack[randomIndex];

  const duplicate = state.collection.find((card: ICard) => card.title === newCard.title);

  if (duplicate) {
    duplicate.amount += 1;
    state.lastAddedCard = { ...duplicate, amount: 1 };
  } else {
    state.collection.push({ ...newCard });
    state.lastAddedCard = newCard;
  }
};
