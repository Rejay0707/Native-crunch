import ProductCard from "../product/ProductCard";

const ShopProductGrid = ({ products, onAddToCart }) => {
  if (!products.length) {
    return (
      <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-[#d9c9b9]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#2E1E13]">
            No Products Found
          </h2>

          <p className="mt-2 text-[#777]">Try another search or category.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ShopProductGrid;
