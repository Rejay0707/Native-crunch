// import { useMemo, useState } from "react";
// import { products } from "../data/products";

// export const useHomeContainer = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredProducts = useMemo(() => {
//     if (selectedCategory === "all") {
//       return products;
//     }

//     return products.filter(
//       (product) => product.category === selectedCategory
//     );
//   }, [selectedCategory]);

//   const bestSellers = products.slice(0, 3);

//   return {
//     selectedCategory,
//     setSelectedCategory,
//     filteredProducts,
//     bestSellers,
//   };
// };

import { useEffect, useMemo, useState } from "react";

import { fetchProducts, fetchCategories } from "../api/productApi";
import { mapProduct, mapCategory } from "../utils/productMapper";

export const useHomeContainer = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        setError("");

        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);

        const mappedProducts = productsData.map(mapProduct);

        const mappedCategories = [
          {
            id: "all",
            label: "All Products",
          },
          ...categoriesData.map(mapCategory),
        ];

        setProducts(mappedProducts);
        setCategories(mappedCategories);
      } catch (error) {
        console.error("Failed to load home data:", error);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory,
    );
  }, [products, selectedCategory]);

  const bestSellers = useMemo(() => {
    return products.filter((product) => product.isBestSeller);
  }, [products]);

  return {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    bestSellers,
    loading,
    error,
  };
};