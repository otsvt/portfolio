"use client";
import { useCustomScroll } from "@/components/hooks/use-custom-scroll";
import { MagazineTop } from "./layouts/magazine-top";
import { MagazineNews } from "./layouts/magazine-news";
import { Hero } from "./layouts/hero";
import { Dream } from "./layouts/dream";
import { Music } from "./layouts/music";
import { Notes } from "./layouts/notes";
import { Breaking } from "./layouts/breaking";
import { Chronicles } from "./layouts/chronicles";
import { Dementors } from "./layouts/dementors";
import { Politics } from "./layouts/politics";
import { MagazineFooter } from "./layouts/magazine-footer";
import styles from "./styles/style.module.scss";
import clsx from "clsx";

export const DailyProphet = ({ basePath }) => {
  useCustomScroll(styles.customScroll);

  return (
    <div className={clsx(styles.wrapper, "font-hp")}>
      <main className={styles.magazine}>
        <header className={styles.magazineHeader}>
          <MagazineTop basePath={basePath} />
          <MagazineNews basePath={basePath} />
        </header>
        <div class={styles.magazineBody}>
          <Hero basePath={basePath} />
          <Dream basePath={basePath} />
          <Music basePath={basePath} />
          <Notes basePath={basePath} />
          <Breaking basePath={basePath} />
          <Chronicles basePath={basePath} />
          <Dementors basePath={basePath} />
          <Politics />
          <MagazineFooter />
        </div>
      </main>
    </div>
  );
};
