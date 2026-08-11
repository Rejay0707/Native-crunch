// import { useState } from "react";
// import ShopHero from "../components/shop/ShopHero";
// import ShopToolBar from "../components/shop/ShopToolBar";
// import ShopProductGrid from "../components/shop/ShopProductGrid";
// import { useCart } from "../context/CartContext";
// import { products, categories } from "../data/products";

// const ShopContainer = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("default");

//   const { addToCart } = useCart();
//   const filteredProducts = products
//     .filter((product) => {
//       const categoryMatch =
//         selectedCategory === "all" || product.category === selectedCategory;

//       const searchMatch = product.name
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       return categoryMatch && searchMatch;
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "name-asc":
//           return a.name.localeCompare(b.name);

//         case "name-desc":
//           return b.name.localeCompare(a.name);

//         case "price-low":
//           return a.variants[0].price - b.variants[0].price;

//         case "price-high":
//           return b.variants[0].price - a.variants[0].price;

//         default:
//           return 0;
//       }
//     });

//   return (
//     <>
//       <ShopHero />

//       <div className="mx-auto max-w-7xl px-6 py-16">
//         <ShopToolBar
//           categories={categories}
//           selectedCategory={selectedCategory}
//           onCategoryChange={setSelectedCategory}
//           search={search}
//           onSearchChange={setSearch}
//           productCount={filteredProducts.length}
//         />

//         <ShopProductGrid products={filteredProducts} onAddToCart={addToCart} />
//       </div>
//     </>
//   );
// };

// export default ShopContainer;

import { useEffect, useState } from "react";

import ShopHero from "../components/shop/ShopHero";
import ShopToolBar from "../components/shop/ShopToolBar";
import ShopProductGrid from "../components/shop/ShopProductGrid";

import { useCart } from "../context/CartContext";

import { fetchProducts, fetchCategories } from "../api/productApi";
import { mapProduct, mapCategory } from "../utils/productMapper";

const ShopContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    const loadShopData = async () => {
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
        console.error("Failed to load shop data:", error);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadShopData();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);

        case "name-desc":
          return b.name.localeCompare(a.name);

        case "price-low":
          return a.variants[0].price - b.variants[0].price;

        case "price-high":
          return b.variants[0].price - a.variants[0].price;

        default:
          return 0;
      }
    });

  return (
    <>
      <ShopHero />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <ShopToolBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          search={search}
          onSearchChange={setSearch}
          productCount={filteredProducts.length}
        />

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#E7D8CA] border-t-[#C97A34]" />
          </div>
        ) : error ? (
          <div className="py-16 text-center text-red-600">{error}</div>
        ) : (
          <ShopProductGrid
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        )}
      </div>
    </>
  );
};

export default ShopContainer;
