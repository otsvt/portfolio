import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Title = ({ speed, classNames }) => {
  return (
    <div data-speed={speed} className={clsx(classNames, "h-screen")}>
      <h1 className={clsx(styles.hPseudo, "w-min bottom-[20vh] md:bottom-[10vh] leading-[0.8]")}>web developer</h1>
    </div>
  );
};
