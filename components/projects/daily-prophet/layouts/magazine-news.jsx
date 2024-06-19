import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const MagazineNews = ({ basePath }) => {
  return (
    <div className={styles.magazineNews}>
      <div className={styles.news}>
        <h2 className={clsx(styles.newsTitle, "font-lumos")}>
          Diagon Alley Shopkeepers Form Vigilante Groups for Protection
        </h2>
        <p className={clsx(styles.newsText, "font-hp")}>
          *******In the wake of the artifact disappearances, shop owners unite to form vigilante groups, vowing to
          protect their establishments and share information on suspicious activity.*******
        </p>
      </div>
      <div className={styles.news}>
        <h2 className={clsx(styles.newsTitle, "font-wolfpack")}>
          Ministry Deploys Aurors for Diagon Alley Investigation
        </h2>
        <p className={clsx(styles.newsText, "font-wizards")}>
          Aurors dispatched to solve the vanishing artefacts mystery in Diagon Alley.
        </p>
      </div>
      <div className={styles.news}>
        <h2 className={clsx(styles.newsText, "font-harrypotter")}>Magical Creatures Spotted in Diagon Alley!</h2>
        <p className={clsx(styles.newsText, "font-lumos")}>
          Eyewitnesses report mysterious midnight parade of enchanted creatures.
        </p>
      </div>
      <div className={styles.news}>
        <h2 className={clsx(styles.newsTitle, "font-hp")}>Quidditch Showdown: Harpies vs. Falcons!</h2>
        <p className={clsx(styles.newsText, "font-wizards")}>
          Anticipation rises for the epic clash between Holyhead Harpies and Falmouth Falcons.
        </p>
      </div>
      <div
        class={styles.priceWrapper}
        style={{ backgroundImage: `url(${basePath}/images/daily-prophet/bg-black.png)` }}
      >
        <div class={styles.price}>1 / 36</div>
      </div>
    </div>
  );
};
