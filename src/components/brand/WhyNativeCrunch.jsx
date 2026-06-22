import {
  Leaf,
  WheatOff,
  CandyOff,
  Apple,
  Sprout,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Real Ingredients",
  },
  {
    icon: CandyOff,
    title: "No Refined Sugar",
  },
  {
    icon: Apple,
    title: "Natural Flavours",
  },
  {
    icon: WheatOff,
    title: "Added Prebiotic Fiber",
  },
  {
    icon: Sprout,
    title: "Plant Based",
  },
  {
    icon: HeartHandshake,
    title: "Traditional Goodness",
  },
];

const WhyNativeCrunch = () => {
  return (
    <section className="bg-[#F3E8DB] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-serif text-[#6B3F1D] mb-16">
          Why Choose Native Crunch?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="
                    h-24
                    w-24
                    rounded-full
                    bg-[#8B5E3C]
                    flex
                    items-center
                    justify-center
                    mb-5
                    transition-all
                    hover:scale-105
                  "
                >
                  <Icon size={42} className="text-[#F8F2EA]" />
                </div>

                <h3
                  className="
                    text-[#6B3F1D]
                    font-semibold
                    uppercase
                    tracking-wide
                    leading-6
                  "
                >
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyNativeCrunch;
