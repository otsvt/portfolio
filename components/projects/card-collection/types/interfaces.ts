import { Decks, Rarities } from "./enums";

export interface IDeck {
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface ICard {
  rarity: Rarities;
  title: string;
  description: string;
  hp: number;
  damage: number;
  sprayCost: number;
  image: string;
  pack: string;
  amount: number;
}
