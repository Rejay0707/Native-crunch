import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <motion.div
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </motion.div>
  );
};

export default ProductGrid;