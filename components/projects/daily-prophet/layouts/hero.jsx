import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroExclusive}>
        <div className={clsx(styles.heroExclusiveWrapper, "font-hp")}>
          <div className={styles.heroExclusiveDecore}>exclusive</div>
        </div>
        <p className={clsx(styles.heroExclusiveText, "font-wizards")}>
          In a stunning discovery, magical archaeologists have unearthed a centuries-old spellbook in the Forbidden
          Forest. The ancient tome, believed to be of unknown origin, contains spells long lost to wizardkind.
        </p>
        <p className={clsx(styles.heroExclusiveText, "font-wizards")}>
          The Ministry of Magic is on high alert, investigating the potential implications of these powerful
          incantations. Rumors circulate that the book holds the key to unlocking forgotten magical secrets. Experts
          express both excitement and concern, fearing the misuse of these ancient spells. The Wizarding World awaits
          further information as the Ministry intensifies efforts to decipher the enigmatic contents of this mysterious
          artifact. Stay tuned for updates!
        </p>
      </div>
      <div className={styles.dragon}>
        <div className={styles.dragonTop}>
          <h2 className={clsx(styles.dragonTitle, "font-anima")}>Can Wizards Control the&nbsp;Dragon&nbsp;Chaos?</h2>
          <div className={clsx(styles.dragonDecore, "font-muggle")}>this is</div>
        </div>
        <div className={styles.dragonBody}>
          <div className={styles.dragonRow}>
            <div className={styles.dragonColumn}>
              <p className={clsx(styles.dragonText, styles.dragonTextBig, "first-letter:font-wolfpack")}>
                A state of emergency has been declared as a ferocious dragon has escaped captivity and is wreaking havoc
                across the magical landscape. Witnesses report sightings of the massive creature soaring through the
                skies, breathing fire and causing panic among wizards and Muggles alike.
              </p>
            </div>
            <div className={styles.dragonColumn}>
              <p className={clsx(styles.dragonText, "first-letter:font-anima")}>
                The Ministry of Magic has swiftly responded to the crisis, deploying specialized dragon tamers and
                Aurors to contain the situation. The escaped dragon, identified as a Ukrainian Ironbelly, is known for
                its formidable size and strength. As a result, residents in affected areas are advised to stay indoors
                and take necessary precautions to ensure their safety.
              </p>
              <p className={clsx(styles.dragonText, "first-letter:font-anima")}>
                Ministry urgently calls on witches and wizards for dragon info. Contact Law Enforcement promptly. The
                Daily Prophet commits to providing ongoing updates on efforts to capture the marauding dragon. Stay
                vigilant and anticipate more details!
              </p>
            </div>
          </div>
          <div className={styles.dragonVideo}>
            <video className={styles.video} src="/images/daily-prophet/dragon.mp4" autoPlay muted loop></video>
          </div>
        </div>
      </div>
    </section>
  );
};
