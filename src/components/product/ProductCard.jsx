import { motion } from "framer-motion";
import Button from "../common/Button";

const ProductCard = ({ product }) => {
  return (
    <div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
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
      <div className="bg-[#faf7f2] p-5 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="
            w-full
            aspect-square
            object-contain
          "
          whileHover={{
            scale: 1.08,
            rotate: 2,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </div>

      <div className="p-5">
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
            min-h-[52px]
          "
        >
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-5">
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
