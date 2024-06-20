import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Title = ({ speed, classNames }) => {
  return (
    <div data-speed={speed} className={clsx(classNames, "h-screen")}>
      <h1 className={styles.hPseudo}>web developer</h1>
    </div>
  );
};
