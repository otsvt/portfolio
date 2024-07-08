import { Rarities } from "../types/enums";
import { ICard } from "../types/interfaces";

export const orcsPack: ICard[] = [
  {
    rarity: Rarities.Common,
    title: "Orc Brute",
    description: "This orc brute can deliver crushing blows with its massive club, shattering enemy defenses easily.",
    hp: 2,
    damage: 2,
    sprayCost: 40,
    image: "url(./images/card-collection/orcs/orc-1.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Common,
    title: "Orc Shaman",
    description: "The orc shaman can call upon ancient spirits to heal allies or curse foes with dark magic.",
    hp: 4,
    damage: 3,
    sprayCost: 40,
    image: "url(./images/card-collection/orcs/orc-2.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Common,
    title: "Orc Berserker",
    description: "In a berserk rage, this orc warrior becomes unstoppable, dealing massive damage to enemies.",
    hp: 3,
    damage: 6,
    sprayCost: 40,
    image: "url(./images/card-collection/orcs/orc-3.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Common,
    title: "Orc Chieftain",
    description: "The orc chieftain leads with unparalleled strength, boosting the morale and power of all allies.",
    hp: 4,
    damage: 5,
    sprayCost: 40,
    image: "url(./images/card-collection/orcs/orc-4.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Rare,
    title: "Orc Scout",
    description: "This orc scout moves swiftly and silently, providing vital intelligence on enemy positions.",
    hp: 1,
    damage: 2,
    sprayCost: 60,
    image: "url(./images/card-collection/orcs/orc-5.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Rare,
    title: "Orc Mystic",
    description: "With mystical powers, the orc mystic can control the elements to unleash devastating attacks.",
    hp: 2,
    damage: 3,
    sprayCost: 60,
    image: "url(./images/card-collection/orcs/orc-6.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Rare,
    title: "Orc Warlock",
    description: "The orc warlock conjures dark spells that drain the life force from enemies, restoring his own.",
    hp: 3,
    damage: 4,
    sprayCost: 60,
    image: "url(./images/card-collection/orcs/orc-7.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Epic,
    title: "Orc Warlord",
    description: "A legendary warlord, this orc commands respect and fear, coordinating deadly assaults on enemies.",
    hp: 4,
    damage: 15,
    sprayCost: 80,
    image: "url(./images/card-collection/orcs/orc-8.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Epic,
    title: "Orc Archer",
    description: "This orc archer is a master of the bow, hitting targets with precision even from great distances.",
    hp: 15,
    damage: 10,
    sprayCost: 80,
    image: "url(./images/card-collection/orcs/orc-9.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
  {
    rarity: Rarities.Legend,
    title: "Orc Assassin",
    description: "The orc assassin strikes from the shadows, eliminating key targets with lethal efficiency.",
    hp: 5,
    damage: 18,
    sprayCost: 100,
    image: "url(./images/card-collection/orcs/orc-10.jpg)",
    pack: "Orcs pack",
    amount: 1,
  },
];
