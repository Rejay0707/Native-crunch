import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const BestSellerSection = ({ products }) => {
  return (
    <section id="products" className="bg-[#ecdcd0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            uppercase
            text-xs
            tracking-[4px]
            text-[#C97A34]
          "
        >
          Best Sellers
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
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
            duration: 0.8,
          }}
          className="
            text-5xl
            font-bold
            mt-3
            text-[#2E1E13]
          "
        >
          Loved by the crunch crowd
        </motion.h2>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            grid
            md:grid-cols-3
            gap-8
            mt-10
          "
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellerSection;
