import { UiButton } from "../../uikit/ui-bitton";

export const ButtonActions = ({ currentStep, isGameOver, onModalOpen, onGiveUp, onPlayAgain }) => {
  if (isGameOver)
    return (
      <div className="flex gap-3">
        {" "}
        <UiButton onClick={onModalOpen} type="outline" size="md">
          Results
        </UiButton>
        <UiButton onClick={onPlayAgain} type="primary" size="md">
          Play again
        </UiButton>
      </div>
    );
  else
    return (
      <div className="flex gap-3">
        <UiButton onClick={() => onGiveUp(currentStep)} type="outline" size="md">
          Give up
        </UiButton>
      </div>
    );
};
