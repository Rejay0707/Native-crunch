import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import mangoPeanutButterBar from "../../assets/products/mango-peanut-butter-bar.jpeg";
import palmJaggeryPeanutChikkiBar from "../../assets/products/palm-jaggery-peanut-chikki-bar.jpeg";
import palmJaggeryPumpkinBar from "../../assets/products/palm-jaggery-pumpkin-bar.jpeg";
import pumpkinBar from "../../assets/products/pumpkin-bar.jpeg";

const collections = [
  {
    id: 1,
    title: "Peanut Chikki Bar",
    image: palmJaggeryPeanutChikkiBar,
  },
  {
    id: 2,
    title: "Palm Jaggery Chikki Bar",
    image: palmJaggeryPumpkinBar,
  },
  {
    id: 3,
    title: "No Added Sugar",
    image: pumpkinBar,
  },
  {
    id: 4,
    title: "Peanut Butter Bar",
    image: mangoPeanutButterBar,
  },
  {
    id: 5,
    title: "New Category",
    image: mangoPeanutButterBar,
  },
];

const BestSellerSection = () => {
  return (
    <section id="products" className="bg-[#F8F2EA] py-6 md:py-10">
      <div className="w-full px-3 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-[#c7b299]" />

          <h2
            className="
              whitespace-nowrap
              text-xl
              font-black
              uppercase
              tracking-wide
              text-[#8B5E3C]
              md:text-5xl
            "
          >
            Discover Our Collection
          </h2>

          <div className="h-px flex-1 bg-[#c7b299]" />
        </motion.div>

        {/* Navigation */}
        <div className="relative">
          <button
            className="
            collection-prev
            absolute
            left-2
            md:left-4
            top-1/2
            -translate-y-1/2
            z-10
            rounded-full
            bg-white
            p-2
            shadow-md
            cursor-pointer
          "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="
            collection-next
            absolute
            right-2
            md:right-4
            top-1/2
            -translate-y-1/2
            z-10
            rounded-full
            bg-white
            p-2
            shadow-md
            cursor-pointer
          "
          >
            <ChevronRight size={18} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".collection-prev",
              nextEl: ".collection-next",
            }}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {collections.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group flex flex-col"
                >
                  {/* Category Name Above Image */}
                  <div
                    className="
                      mb-3
                      flex
                      h-12
                      items-center
                      justify-center
                      rounded-sm
                      bg-[#E7D7C4]
                      px-3
                      text-center
                      text-xs
                      font-bold
                      uppercase
                      tracking-[1.5px]
                      text-[#5E3D26]
                      transition-colors
                      duration-300
                      group-hover:bg-[#D8C0A5]
                      md:h-14
                      md:text-sm
                    "
                  >
                    {item.title}
                  </div>

                  {/* Image */}
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        h-[350px]
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
