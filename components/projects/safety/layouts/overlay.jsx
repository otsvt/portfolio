import styles from "../styles/style.module.scss";

export const Overlay = ({ children, isVisible, onClose }) => {
  if (!isVisible) return;

  const handleClick = (e) => {
    if (!e.target.closest("[data-id=card]")) onClose();
  };

  return (
    <div onClick={handleClick} className={styles.overlay}>
      {children}
    </div>
  );
};
