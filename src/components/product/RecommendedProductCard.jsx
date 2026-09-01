import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const RecommendedProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find the first variant that has stock
  const selectedVariant =
    product.variants?.find((variant) => Number(variant.stock) > 0) ||
    product.variants?.[0];

  const stock = Number(selectedVariant?.stock) || 0;

  const handleAdd = (e) => {
    e.stopPropagation();

    if (!selectedVariant || stock <= 0) {
      return;
    }

    addToCart({
      ...product,
      selectedVariant,
    });
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-[#E7D8CA]
        bg-white
        p-2
        transition
        hover:shadow-sm
        cursor-pointer
      "
    >
      {/* Product Image */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          bg-[#F8F2EA]
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-contain
            p-1
          "
        />
      </div>

      {/* Product Information */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            truncate
            text-sm
            font-semibold
            text-[#2E1E13]
          "
        >
          {product.name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-[#6A5B4E]">
          ₹{selectedVariant?.price || 0}
        </p>
      </div>

      {/* Add Button */}
      {stock > 0 ? (
        <button
          type="button"
          onClick={handleAdd}
          className="
            shrink-0
            rounded-md
            bg-[#C97A34]
            px-3
            py-2
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-[#B66E2F]
            cursor-pointer
          "
        >
          Add
        </button>
      ) : (
        <span
          className="
            shrink-0
            rounded-md
            bg-gray-200
            px-2
            py-2
            text-[10px]
            font-semibold
            text-gray-500
          "
        >
          Out
        </span>
      )}
    </div>
  );
};

export default RecommendedProductCard;
