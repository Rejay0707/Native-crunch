/* eslint-disable react-refresh/only-export-components */

import { useContext, useState } from "react";
import CustomizationContext from "./CustomizationContext";

export const CustomizationProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [recipient, setRecipient] = useState({
    name: "",
    occasion: "",
    message: "",
    photo: null,
  });

  // Add Product
  const addProduct = (product) => {
    const defaultVariant = product.variants[0];

    const existing = selectedProducts.find(
      (item) => item.id === product.id && item.weight === defaultVariant.weight,
    );

    if (existing) {
      setSelectedProducts((prev) =>
        prev.map((item) =>
          item.id === product.id && item.weight === defaultVariant.weight
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );

      return;
    }

    setSelectedProducts((prev) => [
      ...prev,
      {
        ...product,
        weight: defaultVariant.weight,
        price: defaultVariant.price,
        quantity: 1,
      },
    ]);
  };

  // Increase Quantity
  const increaseQty = (id, weight) => {
    setSelectedProducts((prev) =>
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

  // Decrease Quantity
  const decreaseQty = (id, weight) => {
    setSelectedProducts((prev) =>
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

  // Remove Product
  const removeProduct = (id, weight) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => !(item.id === id && item.weight === weight)),
    );
  };

  // Change Variant
  const changeVariant = (id, oldWeight, newWeight) => {
    setSelectedProducts((prev) => {
      const current = prev.find(
        (item) => item.id === id && item.weight === oldWeight,
      );

      if (!current) return prev;

      const variant = current.variants.find((v) => v.weight === newWeight);

      return prev.map((item) =>
        item.id === id && item.weight === oldWeight
          ? {
              ...item,
              weight: variant.weight,
              price: variant.price,
            }
          : item,
      );
    });
  };
  const clearCustomization = () => {
    setSelectedProducts([]);

    setRecipient({
      name: "",
      occasion: "",
      message: "",
      photo: null,
    });
  };

  return (
    <CustomizationContext.Provider
      value={{
        selectedProducts,
        addProduct,
        increaseQty,
        decreaseQty,
        removeProduct,
        changeVariant,

        recipient,
        setRecipient,

        clearCustomization,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => useContext(CustomizationContext);
