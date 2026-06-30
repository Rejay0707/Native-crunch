import { motion } from "framer-motion";
import aboutImage from "../../assets/about/about.png";

const AboutHero = () => {
  return (
    <section className="bg-[#F8F2EA] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p
              className="
                uppercase
                tracking-[4px]
                text-[#C97A34]
                font-semibold
              "
            >
              About Native Crunch
            </p>

            <h1
              className="
                text-5xl
                lg:text-6xl
                font-bold
                text-[#2E1E13]
                leading-tight
                mt-5
              "
            >
              Crafted From Nature.
              <br />
              Made For Better Snacking.
            </h1>

            <p
              className="
    mt-8
    text-lg
    text-[#6D645D]
    leading-8
  "
            >
              At Native Crunch, we are redefining the way people snack. Inspired
              by the rich heritage of traditional Indian recipes, we create
              authentic, wholesome snacks designed for modern lifestyles. Our
              products combine time-tested ingredients with functional
              nutrition, offering a healthier alternative to processed snacks
              without compromising on taste.
            </p>
            <p
              className="
                mt-6
                text-lg
                text-[#6D645D]
                leading-8
              "
            >
              From premium peanuts and natural palm jaggery to wholesome seeds
              and authentic flavours, we focus on creating snacks that you can
              truly enjoy every day without compromise.
            </p>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <img
              src={aboutImage}
              alt="Native Crunch"
              className="
                w-full
                rounded-3xl
                shadow-xl
                object-cover
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
