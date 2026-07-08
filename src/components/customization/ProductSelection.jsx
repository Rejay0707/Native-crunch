import { products } from "../../data/products";
import CustomizationProductCard from "./CustomizationProductCard";

const ProductSelection = ({addProduct}) => {
  return (
    <section className="mt-12 ">
      {/* Section Heading */}
      <div className="mb-10">
        <p className="font-semibold uppercase tracking-[0.2em] text-[#C97A34]">
          Step 01
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#2E1E13] lg:text-4xl">
          Choose Your Favourite Products
        </h2>

        <p className="mt-3 max-w-3xl text-[#5A4637]">
          Select the snack bars you'd like to include in your personalized gift
          box. You can customize the quantity and weight in the next step.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <CustomizationProductCard
            key={product.id}
            product={product}
            addProduct={addProduct}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSelection;
