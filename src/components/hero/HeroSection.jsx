import { motion } from "framer-motion";

import mangoPeanutButterBar from "../../assets/products/mango-peanut-butter-bar.jpeg";

const heroCards = [
  {
    id: 1,
    image: mangoPeanutButterBar,
  },
  {
    id: 2,
    image: mangoPeanutButterBar,
  },
  {
    id: 3,
    image: mangoPeanutButterBar,
  },
  {
    id: 4,
    image: mangoPeanutButterBar,
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#F8F2EA] pt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {heroCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="
  group
  relative

  overflow-hidden
  flex
  items-start
  justify-center
  bg-[#F8F2EA]
"
          >
            <motion.img
  src={card.image}
  alt=""
  className="
    w-full
    object-contain
  "
/>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
