import { useCart } from "../context/CartContext";
import Cart from "../components/cart/Cart";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const changeVariant = (id, oldWeight, newWeight) => {
    setCart((prev) => {
      const currentItem = prev.find(
        (item) => item.id === id && item.weight === oldWeight,
      );

      if (!currentItem) return prev;

      const newVariant = currentItem.variants.find(
        (v) => v.weight === newWeight,
      );

      const existing = prev.find(
        (item) =>
          item.id === id &&
          item.weight === newWeight &&
          item.weight !== oldWeight,
      );

      if (existing) {
        return prev
          .filter(
            (item) =>
              !(
                item.id === id &&
                (item.weight === oldWeight || item.weight === newWeight)
              ),
          )
          .concat({
            ...existing,
            quantity: existing.quantity + currentItem.quantity,
          });
      }

      return prev.map((item) =>
        item.id === id && item.weight === oldWeight
          ? {
              ...item,
              weight: newVariant.weight,
              price: newVariant.price,
            }
          : item,
      );
    });
  };

  const increaseQty = (id, weight) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.weight === weight
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQty = (id, weight) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.weight === weight
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id, weight) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.weight === weight)),
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Cart
      cart={cart}
      total={total}
      changeVariant={changeVariant}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
      removeItem={removeItem}
      onCheckout={() => navigate("/checkout")}
      onShopMore={() => navigate("/shop")}
    />
  );
};

export default CartContainer;
