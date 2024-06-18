import { forwardRef } from "react";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Frame = forwardRef(({ type, item }, ref) => {
  if (type === "title") {
    return (
      <div ref={ref} className={styles.frame}>
        <div className={styles.frameContent}>
          <h1 className={styles.h1}>{item.text}</h1>
        </div>
      </div>
    );
  }

  if (type === "media") {
    return (
      <div ref={ref} className={styles.frame}>
        <div className={styles.frameContent}>
          <div
            className={clsx(
              styles.frameMedia,
              item.position === "left" ? styles.frameMediaLeft : styles.frameMediaRight,
              item.line === "horizontal" && styles.frameMediaHorizontal,
              item.line === "vertical" && styles.frameMediaVertical,
              item.line === "square" && styles.frameMediaSquare,
              item.line === "wide" && styles.frameMediaWide,
              item.line === "thin" && styles.frameMediaThin,
              item.size === "short" && styles.frameMediaShort
            )}
            style={{ backgroundImage: `${item.image}` }}
          >
            <span className={styles.frameMediaName}>{item.name}</span>
            <span className={styles.frameMediaDate}>{`(${item.date})`}</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div ref={ref} className={styles.frame}>
        <div className={styles.frameContent}>
          <div className={clsx(styles.text, item.position === "left" ? styles.textLeft : styles.textRight)}>
            <h2 className={styles.textTitle}>{item.title}</h2>
            <p className={styles.p}>{item.text}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "empty") return <div ref={ref} className={styles.frame}></div>;
});
Frame.displayName = "Frame";
