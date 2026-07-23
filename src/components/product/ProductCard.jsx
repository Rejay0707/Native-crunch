import { useState } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [showBack, setShowBack] = useState(false);
  // const [quantity, setQuantity] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const { cart, addToCart, decreaseQuantity } = useCart();
  // Default to 50g if available
  const defaultVariant =
    product.variants.find((v) => v.weight === "50g") || product.variants[0];

  const cartItem = cart.find(
    (item) => item.id === product.id && item.weight === defaultVariant.weight,
  );

  const quantity = cartItem?.quantity || 0;

  return (
    <div className="relative pb-16 ">
      <div
        className="
        bg-white
        rounded-3xl
        overflow-hidden
        border
        border-[#ece2d7]
        hover:shadow-2xl
        transition-all
        duration-300
      "
      >
        <div className="bg-[#faf7f2] p-3 md:p-5 overflow-hidden">
          <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="
  relative
  flex
  items-center
  justify-center
  w-full
  h-[260px]
  sm:h-[300px]
  md:h-[320px]
  lg:h-[340px]
  group
  cursor-pointer
"
          >
            {/* FRONT */}
            <img
              src={product.image}
              alt={product.name}
              className={`
    absolute
    inset-0
    w-[95%]
    h-[95%]
    mx-auto
    object-contain
    transition-all
    duration-500
    ${showBack ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
  `}
            />

            {/* BACK */}
            <img
              src={product.backImage}
              alt={`${product.name} Back`}
              className={`
  absolute
  inset-0
  w-full
  h-full
  object-contain
  transition-all
  duration-500
  ${showBack ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
`}
            />
          </div>

          <p className="mt-3 text-center text-xs text-gray-500 md:hidden">
            Tap image to view back
          </p>
        </div>

        <div className="p-4 md:p-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="
                text-[10px]
                bg-green-50
                text-green-700
                px-2
                py-1
                rounded-full
                uppercase
              "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3
            onClick={() => navigate(`/product/${product.id}`)}
            className="
    text-[#2E1E13]
    font-semibold
    text-base
    min-h-[40px]
    md:min-h-[52px]
    cursor-pointer
    hover:text-[#C97A34]
  "
          >
            {product.name}
          </h3>

          {/* Default Weight */}
          <p className="mt-2 text-sm text-gray-500">
            Weight: <span className="font-medium">{defaultVariant.weight}</span>
          </p>

          {/* Price + Add */}
          {/* Price + Cart Action */}
          <div className="mt-3 md:mt-5 flex items-center justify-between">
            <span className="text-lg font-bold text-[#2E1E13]">
              ₹{defaultVariant.price}
            </span>

            {quantity === 0 ? (
              <Button
                className="px-4 py-2 cursor-pointer"
                onClick={() => {
                  addToCart({
                    ...product,
                    selectedVariant: defaultVariant,
                  });

                  setShowMessage(true);

                  setTimeout(() => {
                    setShowMessage(false);
                  }, 2500);
                }}
              >
                Add
              </Button>
            ) : (
              <div className="flex items-center gap-3 rounded-xl bg-[#F8F2EA] px-3 py-2">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold cursor-pointer"
                  onClick={() =>
                    decreaseQuantity(product.id, defaultVariant.weight)
                  }
                >
                  -
                </button>

                <span className="font-semibold text-[#2E1E13]">{quantity}</span>

                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold cursor-pointer"
                  onClick={() => {
                    addToCart({
                      ...product,
                      selectedVariant: defaultVariant,
                    });
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Product successfully added
          <br />
          Check your cart
        </div>
      )}
    </div>
  );
};

export default ProductCard;
