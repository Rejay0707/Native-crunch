import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero1 (1).png";

const HeroSectionTwo = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        h-full
        overflow-hidden
        bg-[#F8F2EA]   /* ← ADDED */
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C97A34]/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D98A43]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-[#2E1E13]
                md:text-5xl
                lg:text-6xl
              "
            >
              Meet the Heart
              <br />
              Behind <span className="text-[#C97A34]">Native Crunch</span>
            </h2>

            <h3
              className="
                mt-6
                text-xl
                font-medium
                leading-8
                text-[#5A4B3E]
              "
            >
              Every bar tells a story of tradition, quality, and honest
              ingredients.
            </h3>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-[#6F6256]
              "
            >
              At Native Crunch, we believe the finest snacks start with real
              ingredients and timeless traditions. Every bar is carefully
              handcrafted using premium peanuts, natural sweeteners, and
              authentic flavours to deliver a perfect balance of taste,
              nutrition, and quality. Made with honesty and care, our products
              bring the goodness of traditional recipes to modern
              lifestyles—creating wholesome moments for every family.
            </p>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                "Handcrafted Daily",
                "Premium Ingredients",
                "No Preservatives",
                "Family Favourite",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#e8b085]" />
                  <span className="font-medium text-[#2E1E13]">{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <button
                onClick={() => navigate("/shop")}
                className="
                  rounded-lg
                  bg-[#C97A34]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#b66e2f]
                  cursor-pointer
                "
              >
                Explore Products
              </button>

              <button
                onClick={() => navigate("/about")}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#C97A34]
                  px-8
                  py-4
                  font-semibold
                  text-[#C97A34]
                  transition
                  hover:bg-[#C97A34]
                  hover:text-white
                  cursor-pointer
                "
              >
                Learn Our Story
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={heroImage}
              alt="Native Crunch Mascot"
              className="
                w-full
                max-w-[620px]
                object-contain
                drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;