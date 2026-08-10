/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("nativeCrunchCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("nativeCrunchCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    const selectedVariant =
      product.selectedVariant ||
      product.variants.find((v) => v.weight === "50g") ||
      product.variants.find((v) => v.weight === "40g") ||
      product.variants[0];

    const quantityToAdd = Math.max(1, Number(quantity) || 1);

    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id && item.weight === selectedVariant.weight,
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.weight === selectedVariant.weight
            ? {
                ...item,
                quantity: item.quantity + quantityToAdd,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          weight: selectedVariant.weight,
          price: selectedVariant.price,
          quantity: quantityToAdd,
        },
      ];
    });
  };

  const setQuantity = (productId, weight, quantity) => {
    const newQuantity = Math.max(1, Number(quantity) || 1);

    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.weight === weight
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  const addCustomizedGiftBox = (giftBox) => {
    setCart((prev) => [...prev, giftBox]);
  };

  const increaseQuantity = (productId, weight) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.weight === weight
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productId, weight) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId && item.weight === weight
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const addGiftBoxToCart = (giftBox) => {
    setCart((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "gift-box",
        ...giftBox,
      },
    ]);

    setMessage("🎁 Personalized Gift Box added to cart!");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addCustomizedGiftBox,
        decreaseQuantity,
        increaseQuantity,
        addGiftBoxToCart,
        setQuantity,
        message,
        setCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
