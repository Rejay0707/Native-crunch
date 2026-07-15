import heroProduct from "../../assets/hero/native-crunch-hero-bg1.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

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
    pt-10
    pb-20
    lg:pt-12
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
              <button onClick={()=>navigate('/shop')}
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
                  cursor-pointer
                "
              >
                Explore Collection
              </button>

              <button
              onClick={()=>navigate('about')}
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
                  cursor-pointer
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
