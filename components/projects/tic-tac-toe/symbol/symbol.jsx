import { SymbolT } from "./icons/symbol-t";
import { SymbolQ } from "./icons/symbol-q";
import { SymbolX } from "./icons/symbol-x";
import { SymbolO } from "./icons/symbol-o";
import { GAME_STEPS } from "../data/constants";

export const Symbol = ({ symbol, className }) => {
  const RenderIcon =
    {
      [GAME_STEPS.CROSS]: SymbolX,
      [GAME_STEPS.ZERO]: SymbolO,
      [GAME_STEPS.TRIANGLE]: SymbolT,
      [GAME_STEPS.QUADRATE]: SymbolQ,
    }[symbol] ?? SymbolX;

  return <RenderIcon className={className} />;
};
