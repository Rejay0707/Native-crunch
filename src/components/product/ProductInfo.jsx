import ProductWeightSelector from "./ProductWeightSelector";
import QuantitySelector from "./QuantitySelector";

const ProductInfo = ({
  product,
  selectedVariant,
  onVariantChange,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
  onShopMore,
  showMessage,
}) => {
  const totalPrice = selectedVariant.price * quantity;

  return (
    <div className="flex flex-col justify-center">
      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              bg-[#EAF4E6]
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-wide
              text-[#3F8C4F]
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Name */}
      <h1
        className="
          mt-8
          font-serif
          text-4xl
          md:text-5xl
          font-semibold
          leading-tight
          text-[#2E1E13]
        "
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-[#C97A34]">★★★★★</span>

        <span className="text-sm text-[#6A5B4E]">(12 Reviews)</span>
      </div>

      {/* Price */}
      <div className="mt-6">
        <h2
          className="
      text-4xl
      font-bold
      text-[#C97A34]
    "
        >
          ₹{totalPrice}
        </h2>

        {quantity > 1 && (
          <p className="mt-2 text-sm text-[#6A5B4E]">
            ₹{selectedVariant.price} × {quantity}
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-[#E7D8CA]" />

      {/* Description */}
      <p
        className="
          leading-8
          text-[#6A5B4E]
        "
      >
        {product.description ||
          "Handcrafted using traditional recipes with premium natural ingredients for authentic taste."}
      </p>

      {/* Weight Selector */}
      <ProductWeightSelector
        variants={product.variants}
        selectedVariant={selectedVariant}
        onVariantChange={onVariantChange}
      />

      {/* Quantity */}
      <QuantitySelector
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <button
          onClick={onAddToCart}
          className="
            rounded-xl
            bg-[#C97A34]
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#B66E2F]
            hover:scale-105
            cursor-pointer
          "
        >
          Add To Cart
        </button>

        <button
          onClick={onShopMore}
          className="
            rounded-xl
            border
            border-[#C97A34]
            px-8
            py-4
            font-semibold
            text-[#C97A34]
            transition-all
            duration-300
            hover:bg-[#C97A34]
            hover:text-white
            cursor-pointer
          "
        >
          Shop More
        </button>
      </div>
      {showMessage && (
        <div
          className="
      mt-5
      rounded-xl
      border
      border-green-200
      bg-green-50
      px-4
      py-3
      text-sm
      text-green-700
    "
        >
          ✅ Product successfully added to your cart.
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
