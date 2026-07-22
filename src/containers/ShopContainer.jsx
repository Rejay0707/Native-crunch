import { useState } from "react";
import ShopHero from "../components/shop/ShopHero";
import ShopToolBar from "../components/shop/ShopToolBar";
import ShopProductGrid from "../components/shop/ShopProductGrid";
import { useCart } from "../context/CartContext";
import { products, categories } from "../data/products";

const ShopContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const { addToCart } = useCart();
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

        <ShopProductGrid products={filteredProducts} onAddToCart={addToCart} />
      </div>
    </>
  );
};

export default ShopContainer;
