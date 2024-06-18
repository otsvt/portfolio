import { Symbol } from "../../symbol/symbol";

export const StepsTurn = ({ currentStep, nextStep, winnerSymbol }) => {
  return (
    <div className="min-h-11 grid items-start">
      <span className="flex gap-1 text-xl text-textLg font-semibold items-center">
        {winnerSymbol ? "Winner:" : "Turn:"}
        <Symbol symbol={winnerSymbol ? winnerSymbol : currentStep} className="w-5 h-5" />
      </span>
      {!winnerSymbol && (
        <span className="flex gap-1 text-xs text-textMd items-center">
          Next turn:
          <Symbol symbol={nextStep} className="w-2.5 h-2.5" />
        </span>
      )}
    </div>
  );
};
