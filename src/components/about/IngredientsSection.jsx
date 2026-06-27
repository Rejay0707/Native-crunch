import { motion } from "framer-motion";

const IngredientsSection = ({ ingredients }) => {
  return (
    <section className="bg-[#F8F2EA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[4px] text-[#C97A34] font-semibold">
            Our Ingredients
          </p>

          <h2 className="text-5xl font-bold text-[#2E1E13] mt-4">
            Crafted From Nature's Finest Ingredients
          </h2>

          <p className="mt-6 text-[#6D645D] text-lg leading-8">
            Every Native Crunch snack begins with thoughtfully selected
            ingredients that deliver authentic taste, balanced nutrition, and
            wholesome goodness.
          </p>
        </motion.div>

        {/* Ingredient Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-[#E8D6C6]
                hover:shadow-xl
                transition-all
              "
            >
              {/* Icon */}

              <div
                className="
                  h-20
                  w-20
                  rounded-full
                  bg-[#F5E7DA]
                  flex
                  items-center
                  justify-center
                  text-5xl
                  mx-auto
                "
              >
                {ingredient.icon}
              </div>

              {/* Title */}

              <h3
                className="
                  mt-8
                  text-2xl
                  font-bold
                  text-[#2E1E13]
                  text-center
                "
              >
                {ingredient.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-5
                  text-[#6D645D]
                  text-center
                  leading-7
                "
              >
                {ingredient.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-20
            bg-[#2E1E13]
            rounded-3xl
            px-10
            py-12
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-white">
            Honest Ingredients. Honest Nutrition.
          </h3>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
            We believe that great snacks don't need artificial shortcuts. That's
            why every Native Crunch product is thoughtfully crafted using
            ingredients you can recognize, trust, and enjoy every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IngredientsSection;
