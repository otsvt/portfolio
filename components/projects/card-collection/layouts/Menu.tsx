import React, { FC } from "react";
import { Pages } from "../types/enums";
import { ButtonMenu } from "../uikit/ButtonMenu";

export const Menu: FC<{ changePage: (page: Pages) => void }> = ({ changePage }) => {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="grid gap-10">
        <ButtonMenu changePage={changePage} page={Pages.Store} />
        <ButtonMenu changePage={changePage} page={Pages.Collection} />
      </div>
    </section>
  );
};
