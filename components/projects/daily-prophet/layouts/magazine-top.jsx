import Image from "next/image";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const MagazineTop = () => {
  return (
    <div className={clsx(styles.magazineTop, "after:font-wizards")}>
      <div className={styles.magazineTopImg}>
        <Image
          className={styles.img}
          src="/images/daily-prophet/daily-prophet.png"
          width={135}
          height={135}
          alt="daily-prophet"
        />
      </div>
      <div className={styles.magazineTopContent}>
        <div className={clsx(styles.magazineTitle, "font-muggle")}>
          <p className={clsx(styles.firstWord, "after:font-hp")}>Daily</p>
          <p className={styles.secondWord}>Prophet</p>
        </div>
        <p className={clsx(styles.magazineSubtitle, "font-harrypotter")}>Unveiling Magic, One Headline at a Time!</p>
      </div>
    </div>
  );
};
