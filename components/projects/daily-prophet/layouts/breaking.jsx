import Image from "next/image";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Breaking = ({ basePath }) => {
  return (
    <section className={styles.breaking}>
      <div className={styles.breakingTop}>
        <div className={styles.breakingDecore}>
          <Image
            className={styles.svgEye}
            src={`${basePath}/images/daily-prophet/eye.svg`}
            alt="eye"
            width={200}
            height={200}
          />
          <Image
            className={styles.svgEye}
            src={`${basePath}/images/daily-prophet/eye.svg`}
            alt="eye"
            width={200}
            height={200}
          />
          <Image
            className={styles.svgEye}
            src={`${basePath}/images/daily-prophet/eye.svg`}
            alt="eye"
            width={200}
            height={200}
          />
        </div>
        <h2 className={clsx(styles.breakingTitle, "font-harrypotter")}>Perilous Vanishing at school</h2>
        <div className={clsx(styles.breakingTopText, "font-lumos")}>
          <p className={styles.p}>
            Hogwarts Student Vanishes: Unexplained Disappearance Sparks Intensive Investigation. Daily Prophet to
            Provide Updates as Community Holds Breath.
          </p>
          <p className={styles.p}>
            Mystery Surrounds Forbidden Forest Disappearance: Concerns Rise as Hogwarts Community Awaits Answers from
            Ongoing Intensive Investigation.
          </p>
        </div>
      </div>
      <div className={styles.breakingMain}>
        <div className={clsx(styles.breakingArticle, "font-wizards")}>
          <p className={clsx(styles.p, "first-letter:font-harrypotter")}>
            In a startling development, the Hogwarts community is on high alert as a 15-year-old student with a penchant
            for magical creatures has disappeared mysteriously. Last seen during a Care of Magical Creatures lesson near
            the Forbidden Forest, the {`student's`} sudden absence has raised concerns.
          </p>
          <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
            The Ministry of Magic, in collaboration with Hogwarts faculty, has launched a thorough investigation. Aurors
            and magical creatures experts are diligently searching the surrounding areas for any traces that might
            provide insights into the disappearance.
          </p>
          <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
            Headmistress Minerva McGonagall addressed the student body, emphasizing the importance of remaining vigilant
            and urging anyone with information to come forward.{` "Our`} focus is on locating the student swiftly and
            ensuring their safety{`," `}she declared.
          </p>
          <p className={clsx(styles.p, "first-letter:font-harrypotter")}>
            Within the student community, speculation is rife, ranging from the potential involvement of magical
            creatures to whispers of dark forces. The Daily Prophet is committed to providing regular updates on the
            investigation and any unfolding developments in this perplexing case.
          </p>
        </div>
        <div className={styles.breakingVideo}>
          <video
            className={styles.video}
            src={`${basePath}}/images/daily-prophet/breaking.mp4`}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div
          className={styles.breakingFaculties}
          style={{ backgroundImage: `url(${basePath}/images/daily-prophet/faculties-decore.png)` }}
        >
          <Image
            className={styles.svgBreaking}
            src={`${basePath}/images/daily-prophet/gryffindor.svg`}
            alt="gryffindor"
            height={200}
            width={400}
          />
          <Image
            className={styles.svgBreaking}
            src={`${basePath}/images/daily-prophet/hufflepuff.svg`}
            alt="hufflepuff"
            height={200}
            width={400}
          />
          <Image
            className={styles.svgBreaking}
            src={`${basePath}/images/daily-prophet/ravenclaw.svg`}
            alt="ravenclaw"
            height={200}
            width={400}
          />
          <Image
            className={styles.svgBreaking}
            src={`${basePath}/images/daily-prophet/slytherin.svg`}
            alt="slytherin"
            height={200}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};
