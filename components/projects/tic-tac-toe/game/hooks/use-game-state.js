import { useCallback, useEffect, useMemo, useState } from "react";
import { GAME_STEPS, STEPS_ORDER } from "../../data/constants";
import { setNextStep } from "../utils/set-next-step";
import { calculateWinner } from "../utils/calculate-winner";

export const useGameState = (profiles, menuOptions, isOptionsComplete) => {
  const defaultTimer = {
    smTime: 30000,
    mdTime: 60000,
    lgTime: 120000,
  }[menuOptions?.time];

  const [{ cells, currentStep, losers, timers, ratings, options, ratingDifferences }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentStep: GAME_STEPS.CROSS,
    losers: [],
    timers: STEPS_ORDER.reduce((timers, symbol) => {
      timers[symbol] = defaultTimer || 60000;
      return timers;
    }, {}),
    ratings: STEPS_ORDER.reduce((ratings, symbol) => {
      ratings[symbol] = 900;
      return ratings;
    }, {}),
    ratingDifferences: {},
    options: {
      players: {
        2: "2",
        4: "4",
      }[menuOptions?.numberOfPeople],
      time: {
        smTime: "30000",
        mdTime: "60000",
        lgTime: "120000",
      }[menuOptions?.time],
      sequence: {
        smSequence: "3",
        mdSequence: "5",
      }[menuOptions?.sequence],
    },
  });

  const nextStep = setNextStep(currentStep, options.players, losers);
  const winnerSequence = useMemo(() => calculateWinner(cells, options.sequence), [cells, options]);
  const winnerSymbol = cells[winnerSequence?.[0]] || (currentStep === nextStep && currentStep);
  const winnerPlayer = profiles.find((prof) => prof.symbol === winnerSymbol);
  const isDraw = useMemo(() => cells.every((cell) => cell !== null), [cells]);

  useEffect(() => {
    if (!isOptionsComplete) return;

    setGameState((prev) => {
      return {
        ...prev,
        cells: new Array(19 * 19).fill(null),
        currentStep: GAME_STEPS.CROSS,
        losers: [],
        timers: STEPS_ORDER.reduce((timers, symbol) => {
          timers[symbol] = defaultTimer;
          return timers;
        }, {}),
        ratingDifferences: {},
        options: {
          players: {
            2: "2",
            4: "4",
          }[menuOptions?.numberOfPeople],
          time: {
            smTime: "30000",
            mdTime: "60000",
            lgTime: "120000",
          }[menuOptions?.time],
          sequence: {
            smSequence: "3",
            mdSequence: "5",
          }[menuOptions?.sequence],
        },
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOptions, isOptionsComplete]);

  useEffect(() => {
    if (winnerSymbol) {
      setGameState((prev) => {
        const newRatings = Object.keys(prev.ratings).reduce((acc, symbol) => {
          if (symbol === winnerSymbol) acc[symbol] = Math.max(prev.ratings[symbol] + Math.ceil(Math.random() * 15), 0);
          else acc[symbol] = Math.max(prev.ratings[symbol] - Math.ceil(Math.random() * 15), 0);
          return acc;
        }, {});

        const ratingDifferences = Object.keys(newRatings).reduce((acc, symbol) => {
          acc[symbol] = newRatings[symbol] - prev.ratings[symbol];
          return acc;
        }, {});

        return {
          ...prev,
          ratings: newRatings,
          ratingDifferences,
        };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winnerSymbol]);

  const onCellClick = useCallback(
    (index) => {
      if (!isOptionsComplete) return;

      if (cells[index] || winnerPlayer) return;

      setGameState((prev) => {
        return {
          ...prev,
          currentStep: setNextStep(prev.currentStep, options.players, prev.losers),
          cells: prev.cells.map((cell, i) => (i === index ? prev.currentStep : cell)),
        };
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cells, winnerPlayer, isOptionsComplete]
  );

  const runTime = (symbol, ms) => {
    if (!isOptionsComplete) return;

    setGameState((prev) => {
      return {
        ...prev,
        timers: {
          ...prev.timers,
          [symbol]: prev.timers[symbol] - ms,
        },
      };
    });
  };

  const timeOver = (symbol) => {
    if (!isOptionsComplete) return;

    setGameState((prev) => {
      const newLosers = [...prev.losers, symbol];

      return {
        ...prev,
        losers: newLosers,
        currentStep: setNextStep(prev.currentStep, options.players, newLosers),
      };
    });
  };

  const onGiveUp = (symbol) => {
    if (!isOptionsComplete) return;

    setGameState((prev) => {
      const newLosers = [...prev.losers, symbol];

      return {
        ...prev,
        losers: newLosers,
        currentStep: setNextStep(prev.currentStep, options.players, prev.losers),
      };
    });
  };

  const onPlayAgain = () => {
    if (!isOptionsComplete) return;

    setGameState((prev) => {
      return {
        ...prev,
        cells: new Array(19 * 19).fill(null),
        currentStep: GAME_STEPS.CROSS,
        losers: [],
        timers: STEPS_ORDER.reduce((timers, symbol) => {
          timers[symbol] = defaultTimer;
          return timers;
        }, {}),
        ratingDifferences: {},
        options: {
          players: {
            2: "2",
            4: "4",
          }[menuOptions?.numberOfPeople],
          time: {
            smTime: "30000",
            mdTime: "60000",
            lgTime: "120000",
          }[menuOptions?.time],
          sequence: {
            smSequence: "3",
            mdSequence: "5",
          }[menuOptions?.sequence],
        },
      };
    });
  };

  return {
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
  };
};
