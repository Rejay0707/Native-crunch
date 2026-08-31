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
        bg-[#F8F2EA]
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C97A34]/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D98A43]/10 blur-[140px]" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-4
          sm:py-5
          md:py-6
          lg:px-8
          lg:py-4
        "
      >
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h2
              className="
                mt-2
                text-2xl
                font-bold
                leading-tight
                text-[#2E1E13]
                md:text-3xl
                lg:text-4xl
              "
            >
              Meet the Heart
              <br />
              Behind{" "}
              <span className="text-[#C97A34]">
                Native Crunch
              </span>
            </h2>

            {/* Sub Heading */}
            <h3
              className="
                mt-2
                text-xl
                font-medium
                leading-8
                text-[#5A4B3E]
              "
            >
              Every bar tells a story of tradition, quality, and honest
              ingredients.
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-xl
                text-base
                leading-7
                text-[#6F6256]
                md:text-lg
                md:leading-8
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
            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-4
                md:mt-7
              "
            >
              {[
                "Handcrafted Daily",
                "Premium Ingredients",
                "No Preservatives",
                "Family Favourite",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="h-3 w-3 shrink-0 rounded-full bg-[#e8b085]" />

                  <span className="font-medium text-[#2E1E13]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-4
              "
            >
              <button
                onClick={() => navigate("/shop")}
                className="
                  cursor-pointer
                  rounded-lg
                  bg-[#C97A34]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#b66e2f]
                "
              >
                Explore Products
              </button>

              <button
                onClick={() => navigate("/about")}
                className="
                  flex
                  cursor-pointer
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
                "
              >
                Learn Our Story
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
              Hidden on Mobile + Tablet
              Visible on Laptop/Desktop
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              hidden
              justify-center
              lg:flex
            "
          >
            <img
              src={heroImage}
              alt="Native Crunch Mascot"
              className="
                w-full
                max-w-[500px]
                object-contain
                drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]
                xl:max-w-[560px]
                2xl:max-w-[620px]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;