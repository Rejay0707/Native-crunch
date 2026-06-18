import { motion } from "framer-motion";
import Button from "../common/Button";
import Stats from "./Stats";

import heroImage from "../../assets/products/mango-peanut-butter-bar.jpeg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#F8F2EA]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-28">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* LEFT SIDE */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={itemVariants}
              className="
                inline-flex
                items-center
                border
                border-[#d9c9b8]
                rounded-full
                px-4
                py-2
                text-xs
                font-medium
                text-[#6D645D]
              "
            >
              Real ingredients. Honest snacks.
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="
                mt-8
                text-4xl
                md:text-6xl
                font-bold
                leading-tight
                text-[#2E1E13]
              "
            >
              Clean Energy
              <br />
              <span className="text-[#C97A34]">Snacks Made</span>
              <br />
              From Real Ingredients
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="
                mt-6
                text-lg
                text-[#6D645D]
                max-w-lg
              "
            >
              Crafted with slow roasted peanuts, palm jaggery and natural
              flavours. No refined sugar. No compromise.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-8 flex-wrap"
            >
              <Button className="cursor-pointer">Shop Now</Button>

              <Button variant="secondary" className="cursor-pointer">Explore Categories</Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stats />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div variants={imageVariants} initial="hidden" animate="show">
            <div
              className="
                bg-[#F3DFC8]
                rounded-[40px]
                h-[420px]
                md:h-[520px]
                flex
                items-center
                justify-center
                p-8
              "
            >
              <motion.img
                src={heroImage}
                alt="Hero Product"
                className="
                  max-h-[330px]
                  md:max-h-[430px]
                  object-contain
                "
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
