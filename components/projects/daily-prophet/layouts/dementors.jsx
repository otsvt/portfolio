import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Dementors = ({ basePath }) => {
  return (
    <section className={clsx(styles.dementors, "after:font-anima before:font-anima")}>
      <div className={styles.dementorsContent}>
        <p className={clsx(styles.dementorsText, "font-lumos")}>
          In an unsettling turn of events, multiple eyewitnesses report chilling encounters with Dementors lurking in
          the vicinity of Hogsmeade. The spectral figures, known for draining happiness and instilling fear, have raised
          concerns among the wizarding community.
        </p>
        <p className={clsx(styles.dementorsText, "font-lumos")}>
          The Ministry of Magic has responded swiftly, deploying a team of highly-trained Aurors to investigate the
          surge in Dementor activity. Authorities urge residents to exercise caution and report any sightings promptly
          to aid in the ongoing investigation.
        </p>
        <div className={styles.dementorsVideo}>
          <video
            src={`${basePath}/images/daily-prophet/dementors.mp4`}
            className={styles.video}
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </section>
  );
};
