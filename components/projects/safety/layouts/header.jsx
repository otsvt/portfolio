import styles from "../styles/style.module.scss";

export const Header = ({ isPageLoad }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Your safety</h1>
      <div style={{ opacity: isPageLoad ? 1 : 0 }} className={styles.preloader}>
        Loading...
      </div>
    </div>
  );
};
