import React, { FC } from "react";
import { Pages } from "../types/enums";
import { ButtonBack } from "../uikit/ButtonBack";

export const Store: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  return (
    <section className="h-full py-5">
      <header className="mb-5 text-right">
        <ButtonBack changePage={changePage} />
      </header>
      Store
    </section>
  );
};
