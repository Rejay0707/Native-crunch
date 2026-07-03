// import heroProduct from "../../assets/hero/native-crunch-hero-bg.png";
// import { ArrowRight } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden"
//     >
//       {/* Background Image */}
//       <img
//         src={heroProduct}
//         alt="Native Crunch Products"
//         className="
//           absolute
//           inset-0
//           w-full
//           h-full
//           object-cover
//         "
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* Content */}
//       <div className="relative z-10 min-h-screen flex items-center">
//         <div
//           className="
//             w-full
//             pl-8
//             md:pl-14
//             lg:pl-20
//             xl:pl-24
//           "
//         >
//           <div className="max-w-2xl">
//             {/* Tagline */}
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[1px] bg-[#C97A34]" />

//               <p className="uppercase tracking-[5px] text-[#C97A34] text-xs md:text-sm">
//                 Tamil Nadu's Artisan Snack House
//               </p>
//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 text-white
//                 font-serif
//                 leading-[0.9]
//                 text-5xl
//                 md:text-7xl
//                 lg:text-[95px]
//               "
//             >
//               Tradition Crafted
//               <br />

//               <span className="italic text-[#D98A43]">
//                 for the Modern
//               </span>

//               <br />

//               <span className="italic text-[#D98A43]">
//                 Palate
//               </span>
//             </h1>

//             {/* Tamil Text */}
//             <p className="mt-8 text-lg text-white/80">
//               பாரம்பரிய தமிழ் சுவைகள் – இன்றைய வாழ்க்கைக்காக
//             </p>

//             {/* Description */}
//             <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-xl">
//               Native Crunch creates handcrafted peanut bars,
//               palm jaggery sweets and nutritious snacks using
//               real ingredients sourced from local farms.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 mt-10">
//               <button
//                 className="
//                   bg-[#C97A34]
//                   hover:bg-[#b66e2f]
//                   text-white
//                   px-8
//                   py-4
//                   uppercase
//                   tracking-wide
//                   transition-all
//                   duration-300
//                 "
//               >
//                 Explore Collection
//               </button>

//               <button
//                 className="
//                   border
//                   border-white/30
//                   text-white
//                   px-8
//                   py-4
//                   uppercase
//                   tracking-wide
//                   flex
//                   items-center
//                   gap-2
//                   hover:bg-white/10
//                   transition-all
//                   duration-300
//                 "
//               >
//                 Learn More
//                 <ArrowRight size={18} />
//               </button>
//             </div>

//             {/* Features */}
//             <div className="flex flex-wrap gap-x-10 gap-y-4 mt-16">
//               <div>
//                 <p className="text-[#D98A43] text-xl font-semibold">
//                   100%
//                 </p>
//                 <p className="text-white/60 uppercase tracking-[2px] text-xs">
//                   Natural Ingredients
//                 </p>
//               </div>

//               <div>
//                 <p className="text-[#D98A43] text-xl font-semibold">
//                   0%
//                 </p>
//                 <p className="text-white/60 uppercase tracking-[2px] text-xs">
//                   Refined Sugar
//                 </p>
//               </div>

//               <div>
//                 <p className="text-[#D98A43] text-xl font-semibold">
//                   Vegan
//                 </p>
//                 <p className="text-white/60 uppercase tracking-[2px] text-xs">
//                   Friendly
//                 </p>
//               </div>

//               <div>
//                 <p className="text-[#D98A43] text-xl font-semibold">
//                   Made
//                 </p>
//                 <p className="text-white/60 uppercase tracking-[2px] text-xs">
//                   In Tamil Nadu
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import heroProduct from "../../assets/hero/native-crunch-hero-bg1.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#120905]"
    >
      {/* Desktop Background Image */}
      {/* Desktop / Laptop Background */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        <img
          src={heroProduct}
          alt=""
          className="
      w-full
      h-full
      object-cover
      object-right
      xl:blur-0
      lg:blur-[0px]
      2xl:scale-100
      xl:scale-105
      lg:scale-110
      transition-all
      duration-500
    "
        />

        {/* Gradient Overlay */}
        <div
          className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#120905]
      via-[#120905]/75
      to-black/20
      lg:from-[#120905]
      lg:via-[#120905]/88
      lg:to-black/45
      xl:via-[#120905]/70
      xl:to-black/25
      2xl:via-[#120905]/55
      2xl:to-transparent
    "
        />
      </div>

      {/* Mobile / Tablet Background */}
      <div className="absolute inset-0 lg:hidden bg-[#120905]" />

      {/* Decorative Glow */}
      <div
        className="
          absolute
          top-1/2
          right-0
          -translate-y-1/2
          w-[500px]
          h-[500px]
          lg:w-[700px]
          lg:h-[700px]
          rounded-full
          bg-[#C97A34]/15
          blur-[120px]
        "
      />

      {/* Content */}
      <div
        className="
    relative
    z-20
    flex
    items-center
    min-h-screen
    pt-12
    pb-20
    lg:pt-0
  "
      >
        <div
          className="
            w-full
            pl-6
            sm:pl-10
            md:pl-14
            lg:pl-16
            xl:pl-24
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl xl:max-w-2xl"
          >
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[2px] bg-[#C97A34]" />

              <p
                className="
                  uppercase
                  tracking-[4px]
                  text-[#C97A34]
                  text-[11px]
                  md:text-xs
                  font-medium
                "
              >
                Tamil Nadu's Artisan Snack House
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                font-serif
                font-semibold
                text-white
                leading-[0.92]
                text-[42px]
sm:text-[50px]
md:text-[64px]
lg:text-[64px]
xl:text-[88px]
2xl:text-[96px]
              "
            >
              Handcrafted
              <br />
              <span className="italic text-[#D98A43]">Healthy &</span>
              <br />
              <span className="italic text-[#D98A43]">Honest Snacks</span>
            </h1>

            {/* Tamil Text */}
            <p
              className="
                mt-6
                text-white/80
                text-base
                md:text-lg
              "
            >
              பாரம்பரிய தமிழ் சுவைகள் – இன்றைய வாழ்க்கைக்காக
            </p>

            {/* Description */}
            <p
              className="
                mt-6
                text-white/70
                leading-8
                text-[15px]
                md:text-lg
                max-w-lg
              "
            >
              Native Crunch creates handcrafted peanut bars, palm jaggery sweets
              and wholesome snacks made using real ingredients, traditional
              recipes and honest nutrition for every generation.
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
                  rounded-md
                  uppercase
                  tracking-wide
                  font-medium
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Explore Collection
              </button>

              <button
                className="
                  border
                  border-white/30
                  hover:border-[#C97A34]
                  text-white
                  hover:text-[#C97A34]
                  px-8
                  py-4
                  rounded-md
                  uppercase
                  tracking-wide
                  font-medium
                  flex
                  items-center
                  gap-2
                  transition-all
                  duration-300
                "
              >
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
            {/* Feature Stats */}
            <div className="mt-16">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
                <div>
                  <h3 className="text-[#D98A43] text-2xl md:text-3xl font-semibold">
                    100%
                  </h3>

                  <p className="mt-2 text-white/60 text-xs uppercase tracking-[2px] leading-5">
                    Natural
                    <br />
                    Ingredients
                  </p>
                </div>

                <div>
                  <h3 className="text-[#D98A43] text-2xl md:text-3xl font-semibold">
                    0%
                  </h3>

                  <p className="mt-2 text-white/60 text-xs uppercase tracking-[2px] leading-5">
                    Refined
                    <br />
                    white Sugar
                  </p>
                </div>

                <div>
                  <h3 className="text-[#D98A43] text-2xl md:text-3xl font-semibold">
                    Protein
                  </h3>

                  <p className="mt-2 text-white/60 text-xs uppercase tracking-[2px] leading-5">
                    Rich
                  </p>
                </div>

                <div>
                  <h3 className="text-[#D98A43] text-2xl md:text-3xl font-semibold">
                    Added
                  </h3>

                  <p className="mt-2 text-white/60 text-xs uppercase tracking-[2px] leading-5">
                    Prebiotic Fiber
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-32
          bg-gradient-to-t
          from-[#120905]
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
};

export default HeroSection;
