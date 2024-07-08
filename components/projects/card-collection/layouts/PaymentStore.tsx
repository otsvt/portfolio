import React, { FC } from "react";
import { CoinIcon } from "../icons/CoinIcon";
import { BuyIcon } from "../icons/BuyIcon";
import clsx from "clsx";

interface IPayment {
  price: number;
  isEnoughCoins: boolean;
  buyCard: () => void;
}

export const PaymentStore: FC<IPayment> = ({ price, isEnoughCoins, buyCard }) => {
  const warningMessage = () => (
    <span className={clsx("absolute -bottom-2 right-1/2 translate-x-1/2", "text-2xl text-red-950/80 text-nowrap")}>
      *not enough coins
    </span>
  );

  return (
    <div className={clsx("self-end", "flex flex-col items-center")}>
      <div className={clsx("py-1 px-3", "flex items-center gap-2", "rounded", "border-b-4 border-black/60")}>
        <span className="font-bold text-3xl text-black/80">Price: {price}</span>
        <CoinIcon className="w-10 h-10" />
      </div>
      <button
        disabled={isEnoughCoins ? false : true}
        onClick={buyCard}
        className={clsx("relative", "text-3xl font-bold group")}
      >
        <BuyIcon
          className={clsx(
            "w-[400px] transition-colors",
            isEnoughCoins ? "fill-black/50 group-hover:fill-black/80" : "fill-red-950/60"
          )}
        />
        <span
          className={clsx(
            "absolute top-8 right-1/2 translate-x-1/2 ",
            "font-bold text-3xl transition-colors",
            isEnoughCoins ? "text-black/80 group-hover:text-black" : "text-red-950/60"
          )}
        >
          Buy
        </span>
        {!isEnoughCoins && warningMessage()}
      </button>
    </div>
  );
};
