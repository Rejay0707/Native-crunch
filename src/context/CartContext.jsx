/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("nativeCrunchCart");

    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart:", error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("nativeCrunchCart", JSON.stringify(cart));
  }, [cart]);

  
// ==========================================
// ADD PRODUCT TO CART
// ==========================================

const addToCart = (product, quantity = 1) => {
  const selectedVariant =
    product.selectedVariant ||
    product.variants?.find((v) => v.weight === "50g") ||
    product.variants?.find((v) => v.weight === "40g") ||
    product.variants?.[0];

  if (!selectedVariant) {
    console.error("No product variant found:", product);
    return;
  }

  const quantityToAdd = Math.max(
    1,
    Number(quantity) || 1,
  );

  setCart((prev) => {
    const existing = prev.find(
      (item) =>
        item.product_variant_id === selectedVariant.id,
    );

    // ==========================================
    // EXISTING PRODUCT
    // Increase quantity + move to TOP
    // ==========================================

    if (existing) {
      const updatedItem = {
        ...existing,
        quantity:
          Number(existing.quantity) + quantityToAdd,
      };

      const remainingItems = prev.filter(
        (item) =>
          item.product_variant_id !== selectedVariant.id,
      );

      return [updatedItem, ...remainingItems];
    }

    // ==========================================
    // NEW PRODUCT
    // Add directly to TOP
    // ==========================================

    const newItem = {
      product_variant_id: selectedVariant.id,
      product_id: product.id,
      name: product.name,
      weight: selectedVariant.weight,
      price: selectedVariant.price,
      quantity: quantityToAdd,
      image: product.image,
    };

    return [newItem, ...prev];
  });
};



  // ==========================================
  // SET EXACT QUANTITY
  // ==========================================

  const setQuantity = (
    productVariantId,
    quantity,
  ) => {
    const newQuantity = Math.max(
      1,
      Number(quantity) || 1,
    );

    setCart((prev) =>
      prev.map((item) =>
        item.product_variant_id === productVariantId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item,
      ),
    );
  };

  // ==========================================
  // INCREASE QUANTITY
  // ==========================================

  const increaseQuantity = (productVariantId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product_variant_id === productVariantId
          ? {
              ...item,
              quantity: Number(item.quantity) + 1,
            }
          : item,
      ),
    );
  };

  // ==========================================
  // DECREASE QUANTITY
  // ==========================================

  const decreaseQuantity = (productVariantId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product_variant_id === productVariantId
            ? {
                ...item,
                quantity: Number(item.quantity) - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // ==========================================
  // REMOVE ITEM
  // ==========================================

  const removeItem = (productVariantId) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          item.product_variant_id !== productVariantId,
      ),
    );
  };

  // ==========================================
  // CUSTOMIZED GIFT BOX
  // ==========================================

  const addCustomizedGiftBox = (giftBox) => {
    setCart((prev) => [...prev, giftBox]);
  };

  // ==========================================
  // GIFT BOX
  // ==========================================

  const addGiftBoxToCart = (giftBox) => {
    setCart((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "gift-box",
        ...giftBox,
      },
    ]);

    setMessage(
      "🎁 Personalized Gift Box added to cart!",
    );

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,

        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        removeItem,

        addCustomizedGiftBox,
        addGiftBoxToCart,

        message,
        setMessage,

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
