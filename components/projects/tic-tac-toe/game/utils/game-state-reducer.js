import { GAME_STEPS, STEPS_ORDER } from "../../data/constants";
import { setNextStep } from "./set-next-step";

export const gameStateReducer = (state, actions) => {
  switch (actions.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { i, winnerSequence, now } = actions;

      if (state.cells[i] || !!winnerSequence) return state;

      return {
        ...state,
        cells: updateCells(state, i),
        currentStep: setNextStep(state.currentStep, state.profilesCount, state.timers),
        currentStepStart: now,
        timers: updateTimers(state, now),
      };
    }
    case GAME_STATE_ACTIONS.TIME_LOSE: {
      const { now, winnerPlayer } = actions;
      if (winnerPlayer) return;
      console.log("yes");
      console.log(winnerPlayer);

      if (!isTimeOver(state, now)) return state;

      return {
        ...state,
        currentStep: setNextStep(state.currentStep, state.profilesCount, state.timers),
        currentStepStart: now,
        timers: updateTimers(state, now),
      };
    }
    default:
      return state;
  }
};

export const initGameState = ({ profilesCount, defaultTimer, currentStepStart }) => ({
  cells: new Array(19 * 19).fill(null),
  currentStep: GAME_STEPS.CROSS,
  profilesCount,
  currentStepStart,
  timers: STEPS_ORDER.reduce((timers, symbol) => {
    timers[symbol] = defaultTimer;
    return timers;
  }, {}),
});

function updateCells(gameState, i) {
  return gameState.cells.map((cell, index) => (index === i ? gameState.currentStep : cell));
}

function updateTimers(gameState, now) {
  const diff = now - gameState.currentStepStart;
  const timer = gameState.timers[gameState.currentStep];

  return {
    ...gameState.timers,
    [gameState.currentStep]: timer - diff,
  };
}

function isTimeOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentStep];

  return timer <= 0;
}
