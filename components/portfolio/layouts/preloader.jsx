import { useEffect, useState } from "react";
import styles from "../styles/style.module.scss";

export const Preloader = ({ isVisible }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      const handleLoad = () => {
        setFadeOut(true);
      };

      const timeout = setTimeout(handleLoad, 500);

      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <div
      className={`h-screen absolute z-20 inset-0 flex items-center justify-center ${
        fadeOut ? styles.fadeOut : "bg-zinc-900"
      }`}
    >
      <div className={styles.loader}></div>
    </div>
  );
};
