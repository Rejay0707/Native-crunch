import { motion } from "framer-motion";
import { categories } from "../../data/products";

const ProductTabs = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex flex-wrap justify-center gap-3"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setSelectedCategory(category.id)}
          className={`
            px-5
            py-2
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300
            cursor-pointer
            ${
              selectedCategory === category.id
                ? "bg-[#C97A34] text-white shadow-lg"
                : "bg-white border border-[#e5d8c9] text-[#2E1E13]"
            }
          `}
        >
          {category.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProductTabs;