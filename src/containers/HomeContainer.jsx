// import { useEffect, useMemo, useState } from "react";

// import { fetchProducts, fetchCategories } from "../api/productApi";
// import { mapProduct, mapCategory } from "../utils/productMapper";

// export const useHomeContainer = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadHomeData = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const [productsData, categoriesData] = await Promise.all([
//           fetchProducts(),
//           fetchCategories(),
//         ]);

//         const mappedProducts = productsData.map(mapProduct);

//         const mappedCategories = [
//           {
//             id: "all",
//             label: "All Products",
//           },
//           ...categoriesData.map(mapCategory),
//         ];

//         setProducts(mappedProducts);
//         setCategories(mappedCategories);
//       } catch (error) {
//         console.error("Failed to load home data:", error);
//         setError("Failed to load products. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadHomeData();
//   }, []);

//   const filteredProducts = useMemo(() => {
//     if (selectedCategory === "all") {
//       return products;
//     }

//     return products.filter(
//       (product) => product.category === selectedCategory,
//     );
//   }, [products, selectedCategory]);

//   const bestSellers = useMemo(() => {
//     return products.filter((product) => product.isBestSeller);
//   }, [products]);

//   return {
//     products,
//     categories,
//     selectedCategory,
//     setSelectedCategory,
//     filteredProducts,
//     bestSellers,
//     loading,
//     error,
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

  // Required category order
  const categoryOrder = [2, 3, 4, 1];

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
          ...categoriesData.map(mapCategory).sort((a, b) => {
            const indexA = categoryOrder.indexOf(Number(a.id));
            const indexB = categoryOrder.indexOf(Number(b.id));

            const orderA = indexA === -1 ? categoryOrder.length : indexA;

            const orderB = indexB === -1 ? categoryOrder.length : indexB;

            return orderA - orderB;
          }),
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
    let result = products;

    // Filter by selected category
    if (selectedCategory !== "all") {
      result = products.filter(
        (product) => Number(product.categoryId) === Number(selectedCategory),
      );
    }

    // Sort according to required category ID order: 2 → 3 → 4 → 1
    return [...result].sort((a, b) => {
      const indexA = categoryOrder.indexOf(Number(a.categoryId));
      const indexB = categoryOrder.indexOf(Number(b.categoryId));

      // Any new category goes after the existing categories
      const orderA = indexA === -1 ? categoryOrder.length : indexA;

      const orderB = indexB === -1 ? categoryOrder.length : indexB;

      return orderA - orderB;
    });
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
