import { useMemo, useState } from "react";
import { products } from "../data/products";

export const useHomeContainer = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === selectedCategory
    );
  }, [selectedCategory]);

  const bestSellers = products.slice(0, 3);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    bestSellers,
  };
};