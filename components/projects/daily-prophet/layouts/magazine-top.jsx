import Image from "next/image";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const MagazineTop = ({ basePath }) => {
  return (
    <div className={clsx(styles.magazineTop, "after:font-wizards")}>
      <div className={styles.magazineTopImg}>
        <Image
          priority
          className={styles.img}
          src={`${basePath}/images/daily-prophet/daily-prophet.png`}
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
        <div className={clsx(styles.magazineSubtitle, "font-harrypotter")}>
          <Image
            priority
            src={`${basePath}/images/daily-prophet/sparks.svg`}
            width={20}
            height={20}
            alt="daily-prophet"
          />
          Unveiling Magic, One Headline at a Time!
          <Image
            priority
            src={`${basePath}/images/daily-prophet/sparks.svg`}
            width={20}
            height={20}
            alt="daily-prophet"
          />
        </div>
      </div>
    </div>
  );
};
