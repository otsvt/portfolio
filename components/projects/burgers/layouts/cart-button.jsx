import Image from "next/image";
import styles from "../styles/styles.module.scss";
import clsx from "clsx";

export const CartButton = ({ basePath, isVisible, isCartOpen, counter, cost, onClick }) => {
  if (!isVisible || isCartOpen) return;

  return (
    <div onClick={onClick} className={styles.menuCart}>
      <div className={clsx(styles.menuCartContent, "font-rock")}>
        <div className={styles.menuCartImg}>
          <Image className={styles.img} width={25} height={25} src={`${basePath}/images/burgers/6.jpg`} alt="#" />
          <span className={styles.menuCartCounter}>{counter}</span>
        </div>
        <span className={clsx(styles.menuCartDecore, "font-rock")}>/</span>
        <span className={clsx(styles.menuCartCost, "font-rock")}>
          <span>{cost}</span>$
        </span>
      </div>
    </div>
  );
};
