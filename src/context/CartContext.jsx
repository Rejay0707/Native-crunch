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

  const addToCart = (product) => {
    const defaultVariant =
      product.variants.find((v) => v.weight === "50g") || product.variants[0];

    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id && item.weight === defaultVariant.weight,
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.weight === defaultVariant.weight
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          weight: defaultVariant.weight,
          price: defaultVariant.price,
          quantity: 1,
        },
      ];
    });

    setMessage("✅ Product added successfully! Check your cart.");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
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