import styles from "../styles/styles.module.scss";

export const CartSubmit = ({ onClick }) => {
  return (
    <div className={styles.overlaySubmit}>
      <div className={styles.deliveryWindow}>
        <div className={styles.deliveryWindowText}>
          <div className={styles.deliveryWindowOverlay}></div>
          <p className={styles.p}>Your order is on the way..</p>
        </div>
        <div>
          <button onClick={onClick} class={styles.deliveryWindowButton}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};
