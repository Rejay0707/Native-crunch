import { useState } from "react";
import Button from "../common/Button";

const ProductCard = ({ product }) => {
  const [showBack, setShowBack] = useState(false);

  return (
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
          onClick={() => setShowBack(!showBack)}
          className="
    relative
    w-full
    h-[180px]
    sm:h-[220px]
    md:aspect-square
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
              w-full
              h-full
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

        <h3
          className="
            text-[#2E1E13]
            font-semibold
            text-base
            min-h-[40px] md:min-h-[52px]
          "
        >
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-3 md:mt-5">
          <span className="text-lg font-bold text-[#2E1E13]">
            ₹{product.price}
          </span>

          <Button className="px-4 py-2 cursor-pointer">Add</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
