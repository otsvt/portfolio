import clsx from "clsx";
import { UiModal } from "../../uikit/ui-modal";
import { UiButton } from "../../uikit/ui-bitton";
import { User } from "../../user/user";
import { Symbol } from "../../symbol/symbol";

export const GameModal = ({
  winnerPlayer,
  options,
  profiles,
  timers,
  ratings,
  ratingDifferences,
  isDraw,
  isOpen,
  onClose,
  onPlayAgain,
}) => {
  return (
    <UiModal
      isOpen={isOpen}
      onClose={onClose}
      className="relative mx-auto p-6 rounded-lg shadow-forWindow bg-window"
      size="md"
    >
      <UiModal.Header className="text-2xl text-textMd mb-4 grid gap-2">
        Game over
        {isDraw && <span className="text-textMd">It is a draw</span>}
      </UiModal.Header>
      <UiModal.Body className="mb-10">
        <div className="py-4 px-8 rounded-2xl bg-white shadow-infoInner grid grid-cols-2 gap-3">
          {profiles.slice(0, options.players).map((prof, index) => {
            return (
              <Profile
                key={prof.id}
                isWinner={prof === winnerPlayer}
                isDraw={isDraw}
                timer={timers[prof.symbol]}
                rating={ratings[prof.symbol]}
                ratingDifference={ratingDifferences[prof.symbol]}
                profile={prof}
                isRight={index % 2 === 1}
              />
            );
          })}
        </div>
      </UiModal.Body>
      <UiModal.Footer className="flex justify-end gap-[18px]">
        <UiButton onClick={onClose} size="md" type="outline">
          Go back
        </UiButton>
        <UiButton onClick={onPlayAgain} size="md" type="primary">
          Play again
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
};

const Profile = ({ profile, rating, ratingDifference, isRight, timer, isWinner, isDraw }) => {
  const seconds = Math.max(Math.ceil(timer / 1000), 0);
  const time = {
    minutes: String(Math.floor(seconds / 60)).padStart(2, "0"),
    seconds: String(seconds % 60).padStart(2, "0"),
  };

  return (
    <div className="flex items-center gap-5">
      <div className={clsx("relative  flex-grow", isRight && "order-last")}>
        <div className="absolute p-1 -left-1 -top-1 flex items-center justify-center bg-white rounded-full shadow">
          <Symbol symbol={profile.symbol} className="w-3 h-3" />
        </div>
        <User
          profile={profile}
          rating={rating}
          ratingDifference={ratingDifference}
          className={clsx(!isWinner && !isDraw && "text-orange-800 hover:text-orange-900", isWinner && "text-teal-600")}
        >
          {isWinner && !isDraw ? (
            <i className="text-teal-600">(+{ratingDifference})</i>
          ) : (
            <i className="text-orange-800">({ratingDifference})</i>
          )}
        </User>
      </div>
      <div className="h-8 border border-slate-200"></div>
      <strong
        className={clsx(
          isRight && "order-first",
          isWinner ? "text-teal-600" : "text-orange-800",
          isDraw && "text-black"
        )}
      >
        {time.minutes}:{time.seconds}
      </strong>
    </div>
  );
};
