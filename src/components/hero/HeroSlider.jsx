import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroSection from "./HeroSection";
import HeroSectionTwo from "./HeroSectionTwo";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [<HeroSection key={0} />, <HeroSectionTwo key={1} />];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="
        relative
        min-h-screen
        lg:h-screen
        overflow-hidden
      "
    >
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
          transition={{ duration: 0.6 }}
        >
          {slides[activeSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Previous */}
      {activeSlide > 0 && (
        <button
          onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 sm:left-5 lg:left-8 top-[42%] sm:top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#C97A34] border border-white/20 text-white hover:bg-[#b96d2d] transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
        </button>
      )}

      {/* Next */}
      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 sm:right-5 lg:right-8 top-[42%] sm:top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#C97A34] border border-white/20 text-white hover:bg-[#b96d2d] transition-all duration-300"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
      </button>
    </section>
  );
};

export default HeroSlider;