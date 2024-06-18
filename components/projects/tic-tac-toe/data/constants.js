import userIcon1 from "./icons/user-1.jpg";
import userIcon2 from "./icons/user-2.jpg";
import userIcon3 from "./icons/user-3.jpg";
import userIcon4 from "./icons/user-4.jpg";

export const GAME_STEPS = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  QUADRATE: "quadrate",
};

export const STEPS_ORDER = [GAME_STEPS.CROSS, GAME_STEPS.ZERO, GAME_STEPS.TRIANGLE, GAME_STEPS.QUADRATE];

export const USERS = [
  { id: 1, name: "Ivanov", rating: 900, symbol: GAME_STEPS.CROSS, avatar: userIcon1 },
  { id: 2, name: "Smirnov", rating: 900, symbol: GAME_STEPS.ZERO, avatar: userIcon2 },
  { id: 3, name: "Petrov", rating: 900, symbol: GAME_STEPS.TRIANGLE, avatar: userIcon3 },
  { id: 4, name: "Popov", rating: 900, symbol: GAME_STEPS.QUADRATE, avatar: userIcon4 },
];
