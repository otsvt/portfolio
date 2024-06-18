import { STEPS_ORDER } from "../../data/constants";

export const setNextStep = (currentStep, playersCount, losers) => {
  const slicedStepOrder = STEPS_ORDER.slice(0, playersCount).filter((symbol) => !losers?.includes(symbol) && symbol);
  const nextStepIndex = slicedStepOrder.indexOf(currentStep) + 1;

  return slicedStepOrder[nextStepIndex] ?? slicedStepOrder[0];
};
