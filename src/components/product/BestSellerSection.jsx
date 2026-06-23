import { motion } from "framer-motion";

import mangoPeanutButterBar from "../../assets/products/mango-peanut-butter-bar.jpeg";
import palmJaggeryPeanutChikkiBar from "../../assets/products/palm-jaggery-peanut-chikki-bar.jpeg";
import palmJaggeryPumpkinBar from "../../assets/products/palm-jaggery-pumpkin-bar.jpeg";
import pumpkinBar from "../../assets/products/pumpkin-bar.jpeg";

const collections = [
  {
    id: 1,
    title: "Peanut Butter Bar",
    image: mangoPeanutButterBar,
  },
  {
    id: 2,
    title: "Peanut Chikki Bar",
    image: palmJaggeryPeanutChikkiBar,
  },
  {
    id: 3,
    title: "Palm Jaggery",
    image: palmJaggeryPumpkinBar,
  },
  {
    id: 4,
    title: "No Added Sugar",
    image: pumpkinBar,
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
          className="mb-12 flex items-center justify-center gap-4"
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

        {/* Collection Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group flex flex-col"
            >
              {/* Fixed-size image container */}
              <div
                className="
                  flex
                  h-[260px]
                  items-center
                  justify-center
                  overflow-hidden
                  
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    // w-full
                    h-full
                    
                    // object-contain
                    transition-transform
                    duration-500
                    // group-hover:scale-105
                  "
                />
              </div>

              {/* Fixed-size label */}
              {/* Fixed-size label */}
              <div
                className="
    mt-1
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
