import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Decks } from "../types/enums";
import { ICollectionState } from "../types/interfaces";
import { addCardToCollection } from "../utils/add-card-to-collection";
import { orcsPack } from "../data/orcs";
import { goblinsPack } from "../data/goblins";
import { elvesPack } from "../data/elves";
import { humansPack } from "../data/humans";
import { monstersPack } from "../data/monsters";

const initialState: ICollectionState = {
  collection: [],
  coins: 2900,
  dust: 0,
  lastAddedCard: null,
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<[Decks, number]>) => {
      const [deck, price] = action.payload;

      switch (deck) {
        case Decks.Orcs:
          addCardToCollection(state, orcsPack, price);
          break;
        case Decks.Goblins:
          addCardToCollection(state, goblinsPack, price);
          break;
        case Decks.Elves:
          addCardToCollection(state, elvesPack, price);
          break;
        case Decks.Humans:
          addCardToCollection(state, humansPack, price);
          break;
        case Decks.Monsters:
          addCardToCollection(state, monstersPack, price);
          break;
        default:
          return state;
      }
    },
    deleteCard: (state, action: PayloadAction<[number, string]>) => {
      const [cost, title] = action.payload;
      const currentIndex = state.collection.findIndex((card) => card.title === title);

      if (state.collection[currentIndex].amount > 1) {
        state.collection[currentIndex].amount -= 1;
        state.dust += cost;
      } else {
        const filteredCollection = state.collection.filter((card) => card.title !== title);
        state.collection = [...filteredCollection];
        state.dust += cost;
      }
    },
    convertDust: (state) => {
      const conversionRate = 8 / 10;
      const convertedCoins = Math.floor(state.dust * conversionRate);

      state.coins += convertedCoins;
      state.dust = 0;
    },
  },
});

export const { addCard, deleteCard, convertDust } = collectionSlice.actions;
export default collectionSlice.reducer;
