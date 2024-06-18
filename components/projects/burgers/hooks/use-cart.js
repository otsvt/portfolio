import { useEffect, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const isCartVisible = cart.length > 0;
  const counterCart = cart.length;
  const cartCost = cart?.reduce((total, amount) => total + +amount.price, 0).toFixed(2);

  useEffect(() => {
    if (cart.length === 0) setIsCartOpen(false);
  }, [cart]);

  const onProductChecked = (e, product) => {
    if (e.target.checked)
      setCart((prev) => {
        if (!prev.some((item) => item.id === product.id)) {
          return [...prev, product];
        }
        return prev;
      });
    else {
      setCart((cart) => cart.filter((item) => item.id !== product.id));
    }
  };

  const onCartToggle = () => setIsCartOpen((prev) => !prev);

  const onSubmitOpen = () => setIsSubmitOpen(true);

  const onRemoveProduct = (id) => {
    setCart((prev) => {
      return prev.filter((prod) => prod.id !== id);
    });
  };

  const onCloseOverlay = (e) => {
    if (!e.target.closest("[data-id=card]")) onCartToggle();
  };

  const onReset = () => {
    setCart([]);
    setIsCartOpen(false);
    setIsSubmitOpen(false);
  };

  return {
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
  };
};
