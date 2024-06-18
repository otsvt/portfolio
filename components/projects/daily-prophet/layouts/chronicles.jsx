import Image from "next/image";
import { chronicles } from "../data/chronicles";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Chronicles = () => {
  return (
    <section className={styles.chronicles}>
      <div className={styles.chroniclesTop}>
        <h2 className={clsx(styles.chroniclesTitle, "font-anima")}>Wizarding Chronicles</h2>
        <div className={styles.chroniclesDecore}>
          <Image
            className={styles.svgCloud}
            src="/images/daily-prophet/cloud-1.svg"
            alt="cloud"
            width={150}
            height={150}
          />
          <Image className={styles.svgSun} src="/images/daily-prophet/sun.svg" alt="cloud" width={150} height={150} />
        </div>
        <div className={styles.chroniclesSubtitle}>
          <span className={styles.span}>Wizarding Whispers</span> {`What's`} Brewing in Our World?
        </div>
      </div>
      <div className={styles.chroniclesMain}>
        <div className={styles.chroniclesGrid}>
          {chronicles.map((item, i) => (
            <ChroniclesCard key={i} item={item} />
          ))}
          <div className={styles.chroniclesPoiner}>
            <Image
              className={styles.img}
              src="/images/daily-prophet/pointer.webp"
              width={300}
              height={300}
              alt="pointer"
            />
          </div>
          <div className={styles.chroniclesPoiner}>
            <Image
              className={styles.img}
              src="/images/daily-prophet/pointer.webp"
              width={300}
              height={300}
              alt="pointer"
            />
          </div>
          <div className={styles.chroniclesNews}>
            <h4 className={clsx(styles.chroniclesNewsTitle, "font-wolfpack")}>Fauna Discovery</h4>
            <div className={styles.chroniclesNewsText}>
              <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
                Magizoologists uncover a new species of magical creatures deep within the Forbidden Forest. The
                discovery sparks excitement and curiosity as researchers delve into understanding the unique
                characteristics and potential magical properties of these enchanting beings.
              </p>
            </div>
          </div>
          <div className={styles.chroniclesNews}>
            <h4 className={clsx(styles.chroniclesNewsTitle, "font-wolfpack")}>Potion Elixir</h4>
            <div className={styles.chroniclesNewsText}>
              <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
                Alchemy experts reveal a groundbreaking potion elixir with remarkable healing properties. The concoction
                promises to revolutionize wizarding healthcare, providing advanced remedies for ailments. As interest in
                the elixir surges, researchers delve into its magical composition, paving the way for a new era in
                medicinal wizardry.
              </p>
            </div>
          </div>
          <h3 className={clsx(styles.chroniclesHeading, "font-romance")}>Wondrous Wandcraft Exhibition</h3>
          <div className={styles.chroniclesExhibiton}>
            <p className={clsx(styles.p, "first-letter:font-dumbledor")}>
              This week, Ollivanders hosts an extraordinary Wandcraft Exhibition, showcasing rare and powerful wand
              designs. Enthusiasts and wizards alike flock to witness the unveiling of groundbreaking wand technologies.
              The event promises to be a magical celebration, offering insight into the future of wandmaking and
              spellcasting.
            </p>
          </div>
        </div>
        <div className={clsx(styles.chroniclesColumn, "font-harrypotter")}>
          <p className={styles.p}>
            Ministry Enforces New Policy Restricting Time-Turner Usage, Citing Temporal Disturbances in Recent
            Incidents.
          </p>
          <p className={styles.p}>
            Spellsmiths Unveil Compact Portable Floo Network Devices for Instant Travel Convenience.
          </p>
          <p className={styles.p}>
            Unprecedented Magical Duel between Aurors and Dark Arts Cultists Unfolds in Forbidden Forest.
          </p>
          <p className={styles.p}>
            Wizarding Bakeries Introduce Levitating Pastries, Adding an Extra Dash of Magic to Treats.
          </p>
          <p className={styles.p}>
            Herbology Professor Initiates Community Garden Project to Cultivate Rare Magical Plants and Promote
            Sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

const ChroniclesCard = ({ item }) => {
  return (
    <article className={styles.chroniclesCard}>
      <h4 className={clsx(styles.chroniclesCardTitle, "font-muggle")}>{item.title}</h4>
      <h5 className={clsx(styles.chroniclesCardSubtitle, "font-muggle")}>{item.subtitle}</h5>
      <div className={styles.chroniclesCardText}>
        <p className={styles.p}>{item.text}</p>
      </div>
      <div className={styles.chroniclesCardDecore}>
        <Image
          className={styles.svgDivider}
          src="/images/daily-prophet/divider.svg"
          width={150}
          height={150}
          alt="divider"
        />
        <Image
          className={styles.svgBlackSun}
          src="/images/daily-prophet/black-sun.svg"
          width={150}
          height={150}
          alt="black-sun"
        />
      </div>
    </article>
  );
};
