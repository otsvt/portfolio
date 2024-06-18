import { useGameState } from "./hooks/use-game-state";
import { useGameModal } from "./hooks/use-game-modal";
import { USERS } from "../data/constants";
import { Info } from "./layouts/info";
import { StepsTurn } from "./layouts/steps-turn";
import { GameModal } from "./layouts/game-modal";
import { ButtonActions } from "./layouts/button-actions";
import { Fields } from "./layouts/fields";
import { Title } from "./layouts/title";
import { UiOverlay } from "../uikit/ui-overlay";

export const Game = ({ menuOptions, isOptionsComplete }) => {
  const {
    cells,
    currentStep,
    nextStep,
    winnerSequence,
    winnerSymbol,
    winnerPlayer,
    isDraw,
    timers,
    ratings,
    options,
    ratingDifferences,
    onCellClick,
    runTime,
    timeOver,
    onGiveUp,
    onPlayAgain,
  } = useGameState(USERS, menuOptions, isOptionsComplete);

  const { isModalOpen, onModalClose, onModalOpen } = useGameModal(winnerPlayer, isDraw);

  return (
    <div className="relative grid gap-4 pt-5 px-9 pb-7 bg-window rounded-2xl shadow-forWindow">
      <Title options={options} profiles={USERS} />
      <Info
        isOptionsComplete={isOptionsComplete}
        options={options}
        profiles={USERS}
        currentStep={currentStep}
        timers={timers}
        isDraw={isDraw}
        hasWinner={!!winnerPlayer}
        runTime={runTime}
        timeOver={timeOver}
        ratings={ratings}
      />
      <div className="flex items-center justify-between">
        <StepsTurn currentStep={currentStep} nextStep={nextStep} winnerSymbol={winnerSymbol} />
        <GameModal
          isOpen={isModalOpen}
          isDraw={isDraw}
          winnerPlayer={winnerPlayer}
          options={options}
          profiles={USERS}
          timers={timers}
          ratings={ratings}
          ratingDifferences={ratingDifferences}
          onClose={onModalClose}
          onPlayAgain={onPlayAgain}
        />
        <ButtonActions
          currentStep={currentStep}
          isGameOver={!!winnerPlayer || isDraw}
          onModalOpen={onModalOpen}
          onGiveUp={onGiveUp}
          onPlayAgain={onPlayAgain}
        />
      </div>
      <Fields cells={cells} winnerSequence={winnerSequence} onClick={onCellClick} />
      <UiOverlay isVisible={!isOptionsComplete} />
    </div>
  );
};
