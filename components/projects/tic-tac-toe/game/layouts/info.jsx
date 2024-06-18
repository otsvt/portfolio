import clsx from "clsx";
import { Symbol } from "../../symbol/symbol";
import { User } from "../../user/user";
import { useEffect } from "react";

export const Info = ({
  isOptionsComplete,
  options,
  profiles,
  currentStep,
  timers,
  isDraw,
  hasWinner,
  runTime,
  timeOver,
  ratings,
}) => {
  return (
    <div className="py-4 px-8 rounded-2xl bg-white shadow-infoInner grid grid-cols-2 gap-3">
      {profiles.slice(0, options.players).map((prof, index) => {
        return (
          <Profile
            key={prof.id}
            timer={timers[prof.symbol]}
            rating={ratings[prof.symbol]}
            profile={prof}
            isRight={index % 2 === 1}
            isMoving={prof.symbol === currentStep && !hasWinner && !isDraw}
            runTime={runTime}
            timeOver={timeOver}
            isOptionsComplete={isOptionsComplete}
          />
        );
      })}
    </div>
  );
};

const Profile = ({ profile, timer, rating, isRight, isMoving, runTime, timeOver, isOptionsComplete }) => {
  const seconds = Math.max(Math.ceil(timer / 1000), 0);
  const currentTime = {
    minutes: String(Math.floor(seconds / 60)).padStart(2, "0"),
    seconds: String(seconds % 60).padStart(2, "0"),
  };

  useEffect(() => {
    if (isMoving) {
      const int = setInterval(() => {
        runTime(profile.symbol, 100);
      }, 100);
      return () => clearInterval(int);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMoving, isOptionsComplete]);

  useEffect(() => {
    if (timer <= 0) timeOver(profile.symbol);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return (
    <div className="flex items-center gap-5">
      <div className={clsx("relative  flex-grow", isRight && "order-last")}>
        <div className="absolute border border-[#E5E5DA] p-1 -left-1 -top-1 flex items-center justify-center bg-white rounded-full shadow">
          <Symbol symbol={profile.symbol} className="w-3 h-3" />
        </div>
        <User profile={profile} rating={rating} />
      </div>
      <div className="h-8 border border-slate-200"></div>
      <Timer
        className={clsx(isRight && "order-first", !isMoving && "text-slate-200")}
        seconds={seconds}
        time={currentTime}
      />
    </div>
  );
};

const Timer = ({ seconds, time, className }) => {
  let classes = className ? className + " w-11 text-lg font-semibold " : "text-lg font-semibold ";

  if (seconds <= 15) classes += " text-orange-600";

  return (
    <strong className={classes}>
      {time.minutes}:{time.seconds}
    </strong>
  );
};
