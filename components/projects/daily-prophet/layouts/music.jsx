import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Music = ({ basePath }) => {
  return (
    <section className={styles.music}>
      <div className={clsx(styles.musicSymbols, "font-romance")}>
        <p className={styles.p}>
          wHISPERING fIREFLIES, mOONLIGHT wHISPERS, kALEIDOSCOPIC jELLYBEANS. mYSTERIOUS aCROBATS pARSNIPS wHILE cOSMIC
          lLAMAS cHA-CHA tHROUGH pOLKA
        </p>
        <p className={styles.p}>
          wHISPERING fIREFLIES, mOONLIGHT wHISPERS, kALEIDOSCOPIC jELLYBEANS. mYSTERIOUS aCROBATS pARSNIPS wHILE cOSMIC
          lLAMAS cHA-CHA tHROUGH pOLKA
        </p>
        <p className={styles.p}>
          wHISPERING fIREFLIES, mOONLIGHT wHISPERS, kALEIDOSCOPIC jELLYBEANS. mYSTERIOUS aCROBATS pARSNIPS wHILE cOSMIC
          lLAMAS cHA-CHA tHROUGH pOLKA
        </p>
      </div>
      <div className={styles.musicMain}>
        <div className={styles.musicVideo}>
          <video src={`${basePath}/images/daily-prophet/music.mp4`} autoPlay muted loop></video>
        </div>
        <div className={clsx(styles.musicText, "font-wolfpack")}>
          <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
            In the echoing corridors of Hogwarts, music becomes a magical companion to students. The enchanted
            instruments in the Room of Requirement create harmonies that resonate with the {`castle's`} storied walls.
          </p>
          <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
            Whether {`it's`} the gentle hum of a self-playing piano or the melodic tunes of a ghostly orchestra, the
            magical melodies at Hogwarts evoke a sense of unity, allowing students to express themselves through the
            enchanting language of music.
          </p>
          <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
            During festive occasions, the Great Hall transforms into a symphony of magical notes. The annual Yule Ball,
            in particular, sees students waltzing to ethereal tunes, played by enchanted instruments. The shared
            experience of music at Hogwarts fosters a sense of community, transcending individual differences in the
            enchanting embrace of melody.
          </p>
        </div>
      </div>
    </section>
  );
};
