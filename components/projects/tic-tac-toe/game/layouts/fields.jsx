import { memo } from "react";
import { Symbol } from "../../symbol/symbol";

export const Fields = memo(function Fields({ cells, winnerSequence, onClick }) {
  return (
    <div className="w-fit rounded-lg self-center ml-auto mr-auto grid grid-rows-[repeat(19,_28px)] grid-cols-[repeat(19,_30px)]">
      {cells.map((cell, i) => {
        let classes = "border border-slate-400/30 -mt-px -mr-px flex items-center justify-center";
        if (winnerSequence?.includes(i)) classes += " bg-white/10";

        return (
          <button onClick={() => onClick(i)} className={classes} key={i}>
            {cell ? <Symbol symbol={cell} className="w-5 h-5" /> : null}
          </button>
        );
      })}
    </div>
  );
});
