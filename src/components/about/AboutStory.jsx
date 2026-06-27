import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To redefine healthy snacking by creating delicious products made with honest ingredients, traditional recipes, and modern nutritional values.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted healthy snack brand by bringing together authentic flavours, innovation, and uncompromised quality.",
  },
  {
    icon: ShieldCheck,
    title: "Our Promise",
    description:
      "Every Native Crunch snack is crafted using carefully sourced ingredients without compromising on taste, nutrition, or authenticity.",
  },
];

const AboutStory = () => {
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
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="uppercase tracking-[4px] text-[#C97A34] font-semibold">
            Our Story
          </p>

          <h2 className="text-5xl font-bold text-[#2E1E13] mt-4">
            Built Around Honest Ingredients
          </h2>

          <p className="mt-8 text-[#6D645D] leading-8 text-lg">
            Native Crunch was born with a simple belief — healthy snacks should
            never compromise on taste. Inspired by traditional Indian recipes,
            we carefully craft every product using real ingredients like
            peanuts, palm jaggery, pumpkin seeds, sesame, and natural flavours.
          </p>

          <p className="mt-6 text-[#6D645D] leading-8 text-lg">
            Our goal is to bring wholesome snacking into everyday life by
            combining authentic ingredients with modern convenience. Every bar
            reflects our commitment to quality, transparency, and nutrition.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
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
                className="
                  bg-white
                  rounded-3xl
                  p-10
                  border
                  border-[#E8D6C6]
                  hover:shadow-xl
                  transition-all
                  duration-300
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

                <h3 className="mt-8 text-2xl font-bold text-[#2E1E13]">
                  {card.title}
                </h3>

                <p className="mt-5 text-[#6D645D] leading-8">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
