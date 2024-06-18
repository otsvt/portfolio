import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Politics = () => {
  return (
    <section className={styles.politics}>
      <div className={styles.politicsMain}>
        <h2 className={clsx(styles.politicsTitle, "font-harrypotter")}>Wizarding&nbsp;World Diplomacy&nbsp;Unfolds</h2>
        <p className={clsx(styles.politicsText, "font-harrypotter")}>
          Wizarding World Diplomacy Unfolds: In a pivotal moment for magical diplomacy, the Ministry of Magic has
          initiated comprehensive negotiations with neighboring wizarding realms.
        </p>
        <p className={clsx(styles.politicsText, "font-harrypotter")}>
          The talks aim to forge new alliances, establish trade agreements, and foster international cooperation. As
          enchanted quills transcribe the discussions, the wizarding community watches with bated breath, eager to
          witness the unfolding political dynamics.
        </p>
      </div>
      <div className={styles.politicsGrid}>
        <p className={clsx(styles.politicsText, "first-letter:font-wolfpack")}>
          Despite the {`Ministry's`} efforts to maintain a united front, tensions simmer within the wizarding community.
          Different political factions voice diverse perspectives on the diplomatic landscape, leading to heated debates
          in both the Wizengamot and public forums. The diverse range of opinions reflects the complex nature of
          international relations in the magical world.
        </p>
        <p className={clsx(styles.politicsText, "first-letter:font-wolfpack")}>
          As the negotiations progress, rumors circulate about the inclusion of groundbreaking magical treaties and
          potential collaborations in areas such as magical creature conservation and potion research. The prospect of a
          united magical front against common challenges adds an air of anticipation to the discussions.
        </p>
        <p className={clsx(styles.politicsText, "first-letter:font-wolfpack")}>
          The outcome of these diplomatic efforts holds significant implications for the future of the wizarding world.
          As delegates continue to navigate the intricacies of international relations, the wizarding community remains
          vigilant, awaiting updates on the evolving political landscape that may shape their magical future.
        </p>
      </div>
    </section>
  );
};
