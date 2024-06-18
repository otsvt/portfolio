import { useCustomScroll } from "../../hooks/use-custom-scroll";
import { useFrameScroll } from "./hooks/use-frame-scroll";
import { frames } from "./data/frames";
import { Frame } from "./layouts/frame";
import clsx from "clsx";
import styles from "./styles/style.module.scss";

export const Gallery = () => {
  useCustomScroll(styles.customScroll);
  const { frameRefs } = useFrameScroll();

  return (
    <div className={clsx(styles.wrapper, "font-ebg")}>
      <div className={styles.container}>
        <section className={styles.gallery}>
          {frames.map((frame, i) => (
            <Frame key={i} type={frame.type} item={frame} ref={(el) => (frameRefs.current[i] = el)} />
          ))}
        </section>
      </div>
    </div>
  );
};
