import Image from "next/image";
import styles from "../styles/style.module.scss";
import tsIcon from "../images/icons/typescript.svg";
import nextIcon from "../images/icons/nextjs.svg";
import reduxIcon from "../images/icons/redux.svg";
import tailwindIcon from "../images/icons/tailwindcss.svg";

export const Decore = () => {
  return (
    <div className={styles.decoreWrapper}>
      <div className={styles.decoreItem}>
        <Image src={tsIcon} alt="tsIcon" />
      </div>
      <div className={styles.decoreItem}>
        <Image src={nextIcon} alt="nextIcon" />
      </div>
      <div className={styles.decoreItem}>
        <Image src={reduxIcon} alt="reduxIcon" />
      </div>
      <div className={styles.decoreItem}>
        <Image src={tailwindIcon} alt="tailwindIcon" />
      </div>
    </div>
  );
};
