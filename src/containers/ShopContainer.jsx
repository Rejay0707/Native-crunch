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

  // Search products first
  const searchedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Products belonging to the selected category
  const selectedCategoryProducts =
    selectedCategory === "all"
      ? searchedProducts
      : searchedProducts.filter(
          (product) => product.category === selectedCategory,
        );

  // Products belonging to all other categories
  const otherProducts =
    selectedCategory === "all"
      ? []
      : searchedProducts.filter(
          (product) => product.category !== selectedCategory,
        );

  // Apply sorting
  const sortProducts = (productList) => {
    return [...productList].sort((a, b) => {
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
  };

  const sortedSelectedProducts = sortProducts(selectedCategoryProducts);
  const sortedOtherProducts = sortProducts(otherProducts);

  // Total products being displayed
  const productCount = searchedProducts.length;

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
          productCount={productCount}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#E7D8CA] border-t-[#C97A34]" />
          </div>
        ) : error ? (
          <div className="py-16 text-center text-red-600">{error}</div>
        ) : (
          <>
            {/* Selected Category Products */}
            <ShopProductGrid
              products={sortedSelectedProducts}
              onAddToCart={addToCart}
              recommendationProducts={sortProducts(products).slice(0, 4)}
            />

            {/* Other Products */}
            {selectedCategory !== "all" && sortedOtherProducts.length > 0 && (
              <section className="mt-20">
                <div className="mb-10 text-center">
                  <h2 className="text-3xl font-bold text-[#2E1E13] md:text-4xl">
                    Other Products
                  </h2>

                  <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#C97A34]" />
                </div>

                <ShopProductGrid
                  products={sortedOtherProducts}
                  onAddToCart={addToCart}
                />
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ShopContainer;
