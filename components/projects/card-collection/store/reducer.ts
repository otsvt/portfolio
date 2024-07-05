import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Decks } from "../types/enums";
import { ICard } from "../types/interfaces";
import { orcsPack } from "../data/orcs";
import { goblinsPack } from "../data/goblins";
import { elvesPack } from "../data/elves";
import { humansPack } from "../data/humans";
import { monstersPack } from "../data/monsters";

export interface collectionState {
  collection: ICard[];
  coins: number;
  dust: number;
  lastAddedCard?: ICard;
}

const initialState: collectionState = {
  collection: [],
  coins: 9000,
  dust: 0,
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<[Decks, number]>) => {
      const [deck, price] = action.payload;

      switch (deck) {
        case Decks.Orcs:
          if (price <= state.coins) {
            state.coins -= price;
            const randomIndex = Math.floor(Math.random() * orcsPack.length);
            const newCard = orcsPack[randomIndex];
            const duplicate = state.collection.find((card: ICard) => card.title === newCard.title);

            if (duplicate) {
              duplicate.amount += 1;
              state.lastAddedCard = { ...duplicate, amount: 1 };
            } else {
              state.collection.push({ ...newCard });
              state.lastAddedCard = newCard;
            }
          } else {
            console.log("not enough coins");
          }
          break;
        case Decks.Goblins:
          if (price <= state.coins) {
            state.coins -= price;
            const randomIndex = Math.floor(Math.random() * goblinsPack.length);
            const newCard = goblinsPack[randomIndex];
            const duplicate = state.collection.find((card: ICard) => card.title === newCard.title);

            if (duplicate) {
              duplicate.amount += 1;
              state.lastAddedCard = { ...duplicate, amount: 1 };
            } else {
              state.collection.push({ ...newCard });
              state.lastAddedCard = newCard;
            }
          } else {
            console.log("not enough coins");
          }
          break;
        case Decks.Elves:
          if (price <= state.coins) {
            state.coins -= price;
            const randomIndex = Math.floor(Math.random() * elvesPack.length);
            const newCard = elvesPack[randomIndex];
            const duplicate = state.collection.find((card: ICard) => card.title === newCard.title);

            if (duplicate) {
              duplicate.amount += 1;
              state.lastAddedCard = { ...duplicate, amount: 1 };
            } else {
              state.collection.push({ ...newCard });
              state.lastAddedCard = newCard;
            }
          } else {
            console.log("not enough coins");
          }
          break;
        case Decks.Humans:
          if (price <= state.coins) {
            state.coins -= price;
            const randomIndex = Math.floor(Math.random() * humansPack.length);
            const newCard = humansPack[randomIndex];
            const duplicate = state.collection.find((card: ICard) => card.title === newCard.title);

            if (duplicate) {
              duplicate.amount += 1;
              state.lastAddedCard = { ...duplicate, amount: 1 };
            } else {
              state.collection.push({ ...newCard });
              state.lastAddedCard = newCard;
            }
          } else {
            console.log("not enough coins");
          }
          break;
        case Decks.Monsters:
          if (price <= state.coins) {
            state.coins -= price;
            const randomIndex = Math.floor(Math.random() * monstersPack.length);
            const newCard = monstersPack[randomIndex];
            const duplicate = state.collection.find((card: ICard) => card.title === newCard.title);

            if (duplicate) {
              duplicate.amount += 1;
              state.lastAddedCard = { ...duplicate, amount: 1 };
            } else {
              state.collection.push({ ...newCard });
              state.lastAddedCard = newCard;
            }
          } else {
            console.log("not enough coins");
          }
          break;
        default:
          return state;
      }
    },
  },
});

export const { addCard } = collectionSlice.actions;
export default collectionSlice.reducer;
