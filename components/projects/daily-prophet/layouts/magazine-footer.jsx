import styles from "../styles/style.module.scss";
import clsx from "clsx";

export const MagazineFooter = () => {
  return (
    <footer className={styles.magazineFooter}>
      <ul className={styles.pagesList}>
        <li className={clsx(styles.pagesListItem, "font-romance")}>
          sports <span className={clsx(styles.span, "font-hp")}>3</span>
        </li>
        <li className={clsx(styles.pagesListItem, "font-lumos")}>
          politics <span className={clsx(styles.span, "font-harrypotter")}>7</span>
        </li>
        <li className={clsx(styles.pagesListItem, "font-wizards")}>
          jobs <span className={clsx(styles.span, "font-wolfpack")}>14</span>
        </li>
        <li className={clsx(styles.pagesListItem, "font-muggle")}>
          magic <span className={clsx(styles.span, "font-hp")}>15</span>
        </li>
        <li className={clsx(styles.pagesListItem, "font-dumbledor")}>
          garden <span className={clsx(styles.span, "font-anima")}>17</span>
        </li>
      </ul>
    </footer>
  );
};
