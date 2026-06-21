import { motion } from "framer-motion";

import mangoPeanutButterBar from "../../assets/products/mango-peanut-butter-bar.jpeg";
import palmJaggeryPeanutChikkiBar from "../../assets/products/palm-jaggery-peanut-chikki-bar.jpeg";
import palmJaggeryPumpkinBar from "../../assets/products/palm-jaggery-pumpkin-bar.jpeg";
import pumpkinBar from "../../assets/products/pumpkin-bar.jpeg";

const heroCards = [
  {
    id: 1,
    image: mangoPeanutButterBar,
  },
  {
    id: 2,
    image: palmJaggeryPeanutChikkiBar,
  },
  {
    id: 3,
    image: palmJaggeryPumpkinBar,
  },
  {
    id: 4,
    image: pumpkinBar,
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#F8F2EA] pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {heroCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="overflow-hidden bg-[#F8F2EA]"
          >
            <motion.img
              src={card.image}
              alt=""
              className="
            w-full
            h-[320px]
            sm:h-[420px]
            lg:h-[520px]
            xl:h-[600px]
            object-fill
          "
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
