import { Rarities } from "../types/enums";
import { ICard } from "../types/interfaces";

export const monstersPack: ICard[] = [
  {
    rarity: Rarities.Common,
    title: "Ghastly Ghoul",
    description:
      "The ghastly ghoul feasts on the fear of its enemies, draining their life force with each terrifying shriek.",
    hp: 1,
    damage: 2,
    sprayCost: 40,
    image: "url(./images/card-collection/monsters/monster-1.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Common,
    title: "Venom Serpent",
    description: "The venomous serpent strikes swiftly with its toxic fangs, injecting lethal venom into its prey.",
    hp: 2,
    damage: 3,
    sprayCost: 40,
    image: "url(./images/card-collection/monsters/monster-2.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Common,
    title: "Feral Werewolf",
    description:
      "In the light of the full moon, the feral werewolf transforms, tearing through enemies with primal fury.",
    hp: 3,
    damage: 4,
    sprayCost: 40,
    image: "url(./images/card-collection/monsters/monster-3.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Common,
    title: "Undead Lich",
    description: "The undead lich commands dark magic, summoning skeletal minions and draining life energy from foes.",
    hp: 4,
    damage: 5,
    sprayCost: 40,
    image: "url(./images/card-collection/monsters/monster-4.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Rare,
    title: "Ancient Dragon",
    description: "The ancient dragon breathes fire that engulfs everything in its path, reducing enemies to ashes.",
    hp: 1,
    damage: 2,
    sprayCost: 60,
    image: "url(./images/card-collection/monsters/monster-5.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Rare,
    title: "Cyclops",
    description:
      "The horrifying cyclops wields a massive club, smashing enemies with brute strength and terrifying ferocity.",
    hp: 2,
    damage: 3,
    sprayCost: 60,
    image: "url(./images/card-collection/monsters/monster-6.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Rare,
    title: "Sinister Witch",
    description:
      "The sinister witch casts curses that twist the minds of enemies, turning them against each other in madness.",
    hp: 3,
    damage: 4,
    sprayCost: 60,
    image: "url(./images/card-collection/monsters/monster-7.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Epic,
    title: "Colossal Titan",
    description:
      "The colossal titan towers over the battlefield, smashing enemies with devastating blows from its massive fists.",
    hp: 15,
    damage: 5,
    sprayCost: 80,
    image: "url(./images/card-collection/monsters/monster-8.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Epic,
    title: "Mythical Hydra",
    description:
      "The mythical hydra regenerates heads with each strike, unleashing multiple attacks on enemies with deadly precision.",
    hp: 9,
    damage: 22,
    sprayCost: 80,
    image: "url(./images/card-collection/monsters/monster-9.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
  {
    rarity: Rarities.Legend,
    title: "Demon Overlord",
    description:
      "The demonic overlord commands legions of infernal creatures, spreading chaos and destruction across the realm.",
    hp: 12,
    damage: 13,
    sprayCost: 100,
    image: "url(./images/card-collection/monsters/monster-10.jpg)",
    pack: "Monsters pack",
    amount: 1,
  },
];
