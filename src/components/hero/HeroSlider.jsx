import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroSection from "./HeroSection";
import HeroSectionTwo from "./HeroSectionTwo";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [<HeroSection key={0} />, <HeroSectionTwo key={1} />];

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{
            x: activeSlide === 0 ? -150 : 150,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: activeSlide === 0 ? 150 : -150,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="absolute inset-0"
        >
          {slides[activeSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Previous */}
      {activeSlide > 0 && (
        <button
          onClick={() => setActiveSlide(0)}
          className="
            absolute
            left-8
            top-1/2
            -translate-y-1/2
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white/20
            backdrop-blur-md
           hover:bg-[#C97A34]
            border
            border-white/20
            hover:bg-[#C97A34]
            transition
            cursor-pointer
          "
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next */}
      {activeSlide < slides.length - 1 && (
        <button
          onClick={() => setActiveSlide(1)}
          className="
            absolute
            right-8
            top-1/2
            -translate-y-1/2
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white/10
            backdrop-blur-md
            text-white
            border
            border-white/20
            hover:bg-[#C97A34]
            transition
            cursor-pointer
          "
        >
          <ChevronRight size={28} />
        </button>
      )}
    </section>
  );
};

export default HeroSlider;
