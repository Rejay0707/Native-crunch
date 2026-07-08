import { ShoppingBag } from "lucide-react";

const CustomizationProductCard = ({ product, addProduct }) => {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-[#E9DED2]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      "
    >
      {/* Image */}

      <div className="relative bg-[#F8F2EA]">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-56
            w-full
            object-contain
            p-5

            sm:h-60
            md:h-64
            lg:h-72

            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-5 md:p-6">
        <h3
          className="
            min-h-[56px]
            text-lg
            md:text-xl
            font-bold
            leading-snug
            text-[#2E1E13]
          "
        >
          {product.name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-[#F8F2EA]
                px-3
                py-1
                text-xs
                font-medium
                text-[#8B5E3C]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400">
              Starting From
            </p>

            <h4 className="mt-1 text-2xl font-bold text-[#C97A34]">
              ₹{product.variants[0].price}
            </h4>
          </div>
        </div>

        <button
          onClick={() => {
            console.log("Clicked", product);
            addProduct(product);
          }}
          className="
    mt-5
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-full
    bg-[#C97A34]
    py-3.5
    font-semibold
    text-white
    transition
    hover:bg-[#B86D2D]
    cursor-pointer
  "
        >
          <ShoppingBag size={18} />
          Add To Gift Box
        </button>
      </div>
    </div>
  );
};

export default CustomizationProductCard;
