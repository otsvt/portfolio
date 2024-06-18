import { useCart } from "./hooks/use-cart";
import { productChunks } from "./data/products";
import { Slider } from "./layouts/slider";
import { CartButton } from "./layouts/cart-button";
import { Cart } from "./layouts/cart";
import { CartSubmit } from "./layouts/cart-submit";
import { UiOverlay } from "./uikit/ui-overlay";
import styles from "./styles/styles.module.scss";
import clsx from "clsx";

export const Burgers = () => {
  const {
    cart,
    isCartOpen,
    isSubmitOpen,
    isCartVisible,
    counterCart,
    cartCost,
    onProductChecked,
    onCartToggle,
    onSubmitOpen,
    onRemoveProduct,
    onCloseOverlay,
    onReset,
  } = useCart();

  return (
    <div className={clsx(styles.wrapper, "font-badrips")}>
      <main className={styles.mainWrapper}>
        {productChunks.map((chunk, index) => (
          <Slider key={index} items={chunk} cart={cart} onProductChecked={onProductChecked} />
        ))}
      </main>
      <CartButton
        isVisible={isCartVisible}
        isCartOpen={isCartOpen}
        counter={counterCart}
        cost={cartCost}
        onClick={onCartToggle}
      />
      <UiOverlay className={styles.overlay} isVisible={isCartOpen} callback={onCloseOverlay}>
        <Cart
          cart={cart}
          cost={cartCost}
          onClose={onCartToggle}
          onRemove={onRemoveProduct}
          onSubmitOpen={onSubmitOpen}
        />
      </UiOverlay>
      <UiOverlay className={styles.overlaySubmit} isVisible={isSubmitOpen}>
        <CartSubmit onClick={onReset} />
      </UiOverlay>
    </div>
  );
};
