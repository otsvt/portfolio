import { noteCards, noteListItems } from "../data/notes";
import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const Notes = ({ basePath }) => {
  return (
    <section className={styles.notes}>
      <ul className={styles.notesList}>
        {noteListItems.map((item, i) => (
          <li key={i} className={clsx(styles.notesListItem, "font-harrypotter")}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.notesGrid}>
        {noteCards.map((card, i) => (
          <NotesCart basePath={basePath} key={i} item={card} />
        ))}
      </div>
    </section>
  );
};

const NotesCart = ({ basePath, item }) => {
  return (
    <article className={styles.notesCard}>
      <h3 className={clsx(styles.notesCardTitle, "font-dumbledor")}>
        <span
          className={clsx(
            styles.span,
            "font-harrypotter"
            // `before:bg-[url(${basePath}/images/daily-prophet/inner-1.jpg)]`
          )}
        >
          {item.title}
        </span>
        {item.subtitle}
      </h3>
      <p className={styles.notesCardText}>{item.text}</p>
      <span className={styles.notesCardNumber}>{item.number}</span>
    </article>
  );
};
