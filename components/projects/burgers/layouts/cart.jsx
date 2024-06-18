import Image from "next/image";
import styles from "../styles/styles.module.scss";
import clsx from "clsx";

export const Cart = ({ cart, cost, onClose, onRemove, onSubmitOpen }) => {
  return (
    <div className={styles.delivery} data-id="card">
      <div className={styles.deliveryTop}>
        <h2 className={styles.deliveryTitle}>Your order</h2>
        <span onClick={onClose} className={styles.deliveryEsc}>
          X
        </span>
      </div>
      <div className={styles.deliveryContent}>
        {cart.map((prod) => (
          <CartItem key={prod.id} item={prod} onRemove={onRemove} />
        ))}
      </div>
      <div className={styles.deliveryBottom}>
        <div className={clsx(styles.deliveryTotal, "font-lies")}>
          <i>{cost}</i> $
        </div>
        <div className={styles.deliveryButton} onClick={onSubmitOpen}>
          Confirm Basket
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item, onRemove }) => {
  return (
    <div className={styles.cardDelivery}>
      <div className={styles.cardDeliveryDescription}>
        <h4 className={styles.cardDeliveryName}>{item.title}</h4>
        <div className={styles.cardDeliveryBottom}>
          <span className={clsx(styles.cardDeliveryPrice, "font-rock")}>
            <i>{item.price}</i>$
          </span>
          <span onClick={() => onRemove(item.id)} className={styles.cardDeliveryRemove}>
            {`( remove )`}
          </span>
        </div>
      </div>
      <Image width={100} height={100} src={item.image} alt="#" className={styles.cardDeliveryImg} />
    </div>
  );
};
