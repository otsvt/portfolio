import Image from "next/image";
import styles from "../styles/style.module.scss";
import clsx from "clsx";
import { dreamColumns } from "../data/dream-columns";

export const Dream = () => {
  return (
    <section className={styles.dream}>
      <div className={clsx(styles.dreamDecore, "font-muggle")}>
        <p className={styles.dreamDecoreFirst}>Daily</p>
        <span className={styles.dreamDecoreSecond}>Dream</span>
      </div>
      <div className={styles.dreamArticle}>
        <h2 className={clsx(styles.dreamTitle, "font-anima")}>A Magical Musical Evening at Hogwarts</h2>
        <div className={styles.dreamGrid}>
          {dreamColumns.map((col, i) => (
            <div key={i} className={styles.dreamColumn}>
              <p className={styles.p}>{col}</p>
            </div>
          ))}
          <div className={styles.dreamGridDecore}>
            <Image height={500} width={500} src="/images/daily-prophet/pointer.webp" alt="pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};
