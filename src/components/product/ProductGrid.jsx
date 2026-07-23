import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart }) => {
  const showNavigation = products.length > 4;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {showNavigation && (
        <button
          className="
          product-prev
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          z-10
          cursor-pointer
          p-2
          rounded-full
          bg-white/90
          shadow-md
        "
        >
          <ChevronLeft size={18} />
        </button>
      )}
      {showNavigation && (
        <button
          className="
          product-next
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          z-10
          cursor-pointer
          p-2
          rounded-full
          bg-white/90
          shadow-md
        "
        >
          <ChevronRight size={18} />
        </button>
      )}

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={
          showNavigation
            ? {
                prevEl: ".product-prev",
                nextEl: ".product-next",
              }
            : false
        }
        autoplay={
          showNavigation
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        speed={800}
        slidesPerGroup={1}
        spaceBetween={8}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ProductGrid;
