import { motion } from "framer-motion";
import {
  Leaf,
  CandyOff,
  Vegan,
  ShieldCheck,
  HeartHandshake,
  Sprout,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Real Ingredients",
    description:
      "Made using carefully selected natural ingredients without unnecessary additives.",
  },
  {
    icon: CandyOff,
    title: "No Refined Sugar",
    description:
      "Sweetened with traditional alternatives like palm jaggery and monk fruit.",
  },
  {
    icon: Vegan,
    title: "Plant Based",
    description:
      "Crafted using wholesome plant-based ingredients suitable for mindful snacking.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Prepared with strict quality standards to deliver freshness in every bite.",
  },
  {
    icon: HeartHandshake,
    title: "Traditional Recipes",
    description:
      "Inspired by authentic Indian recipes blended with modern nutrition.",
  },
  {
    icon: Sprout,
    title: "Everyday Nutrition",
    description:
      "Rich in protein, fibre and healthy ingredients that fuel your day naturally.",
  },
];

const AboutStats = () => {
  return (
    <section className="bg-[#ECDCD0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[4px] text-[#C97A34] font-semibold">
            Why Native Crunch
          </p>

          <h2 className="text-5xl font-bold text-[#2E1E13] mt-4">
            Honest Snacking Starts Here
          </h2>

          <p className="mt-6 text-[#6D645D] text-lg leading-8">
            Every Native Crunch snack is thoughtfully crafted with ingredients
            you can trust. We combine traditional goodness with modern
            nutrition, creating snacks that are both delicious and nourishing.
          </p>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  border
                  border-[#E7D5C4]
                  hover:shadow-xl
                  transition-all
                "
              >
                <div
                  className="
                    h-16
                    w-16
                    rounded-full
                    bg-[#C97A34]
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#2E1E13]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[#6D645D] leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
