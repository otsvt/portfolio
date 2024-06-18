import Image from "next/image";
import styles from "../styles/style.module.scss";
import { ButtonClose } from "../icons/btn-close";
import clsx from "clsx";

export const Card = ({ item, onClose }) => {
  if (!item) return;

  return (
    <div className={styles.card} data-id="card">
      <div className={clsx(styles.cardDescription, "font-phobby")}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.p}>{item.text}</p>
        <div className={clsx(styles.cardPrice, "font-honey")}>
          Price / <span className={clsx(styles.span, "font-pretty")}>{item.price}</span>
        </div>
      </div>
      <div className={styles.cardImg}>
        <Image className={styles.img} width={500} height={700} src={item.image} alt="alt" />
      </div>
      <button onClick={onClose} className={styles.button}>
        <ButtonClose classNames={styles.svgIcon} />
      </button>
    </div>
  );
};
