import ProductCard from "../product/ProductCard";

const ShopProductGrid = ({
  products,
  onAddToCart,
  recommendationProducts = [],
}) => {
  if (!products.length) {
    return (
      <>
        {/* No Products Message */}
        <div className="flex min-h-[150px] items-center justify-center rounded-2xl border border-dashed border-[#d9c9b9] px-6 py-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-[#2E1E13]">
              No Products Found
            </h2>

            <p className="mt-1 text-sm text-[#777]">
              Try another search or category.
            </p>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendationProducts.length > 0 && (
          <section className="mt-16">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#2E1E13] md:text-3xl">
                You May Also Like
              </h2>

              <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-[#C97A34]" />
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-8
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              "
            >
              {recommendationProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </section>
        )}
      </>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
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
