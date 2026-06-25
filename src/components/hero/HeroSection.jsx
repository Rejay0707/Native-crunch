// import { motion } from "framer-motion";

// import mangoPeanutButterBar from "../../assets/products/mango-peanut-butter-bar.jpeg";
// import palmJaggeryPeanutChikkiBar from "../../assets/products/palm-jaggery-peanut-chikki-bar.jpeg";
// import palmJaggeryPumpkinBar from "../../assets/products/palm-jaggery-pumpkin-bar.jpeg";
// import pumpkinBar from "../../assets/products/pumpkin-bar.jpeg";

// const heroCards = [
//   {
//     id: 1,
//     image: mangoPeanutButterBar,
//   },
//   {
//     id: 2,
//     image: palmJaggeryPeanutChikkiBar,
//   },
//   {
//     id: 3,
//     image: palmJaggeryPumpkinBar,
//   },
//   {
//     id: 4,
//     image: pumpkinBar,
//   },
// ];

// const HeroSection = () => {
//   return (
//     <section id="home" className="bg-[#F8F2EA] pt-2">
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
//         {heroCards.map((card, index) => (
//           <motion.div
//             key={card.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.1,
//             }}
//             className="overflow-hidden bg-[#F8F2EA]"
//           >
//             <motion.img
//               src={card.image}
//               alt=""
//               className="
//             w-full
//             h-[320px]
//             sm:h-[420px]
//             lg:h-[520px]
//             xl:h-[600px]
//             object-fill
//           "
//               whileHover={{
//                 scale: 1.03,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import heroProduct from "../../assets/hero/native-crunch-hero-bg.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroProduct}
        alt="Native Crunch Products"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div
          className="
            w-full
            pl-8
            md:pl-14
            lg:pl-20
            xl:pl-24
          "
        >
          <div className="max-w-2xl">
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C97A34]" />

              <p className="uppercase tracking-[5px] text-[#C97A34] text-xs md:text-sm">
                Tamil Nadu's Artisan Snack House
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                text-white
                font-serif
                leading-[0.9]
                text-5xl
                md:text-7xl
                lg:text-[95px]
              "
            >
              Tradition Crafted
              <br />

              <span className="italic text-[#D98A43]">
                for the Modern
              </span>

              <br />

              <span className="italic text-[#D98A43]">
                Palate
              </span>
            </h1>

            {/* Tamil Text */}
            <p className="mt-8 text-lg text-white/80">
              பாரம்பரிய தமிழ் சுவைகள் – இன்றைய வாழ்க்கைக்காக
            </p>

            {/* Description */}
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-xl">
              Native Crunch creates handcrafted peanut bars,
              palm jaggery sweets and nutritious snacks using
              real ingredients sourced from local farms.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                className="
                  bg-[#C97A34]
                  hover:bg-[#b66e2f]
                  text-white
                  px-8
                  py-4
                  uppercase
                  tracking-wide
                  transition-all
                  duration-300
                "
              >
                Explore Collection
              </button>

              <button
                className="
                  border
                  border-white/30
                  text-white
                  px-8
                  py-4
                  uppercase
                  tracking-wide
                  flex
                  items-center
                  gap-2
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-16">
              <div>
                <p className="text-[#D98A43] text-xl font-semibold">
                  100%
                </p>
                <p className="text-white/60 uppercase tracking-[2px] text-xs">
                  Natural Ingredients
                </p>
              </div>

              <div>
                <p className="text-[#D98A43] text-xl font-semibold">
                  0%
                </p>
                <p className="text-white/60 uppercase tracking-[2px] text-xs">
                  Refined Sugar
                </p>
              </div>

              <div>
                <p className="text-[#D98A43] text-xl font-semibold">
                  Vegan
                </p>
                <p className="text-white/60 uppercase tracking-[2px] text-xs">
                  Friendly
                </p>
              </div>

              <div>
                <p className="text-[#D98A43] text-xl font-semibold">
                  Made
                </p>
                <p className="text-white/60 uppercase tracking-[2px] text-xs">
                  In Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
