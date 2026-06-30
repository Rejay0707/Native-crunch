import {
  Leaf,
  WheatOff,
  CandyOff,
  Apple,
  Dumbbell,
  HeartHandshake,
} from "lucide-react";

const features = [
  { icon: Leaf, title: "Real Ingredients" },
  { icon: CandyOff, title: "No Refined white Sugar" },
  { icon: Apple, title: "Natural Flavours" },
  { icon: WheatOff, title: "Added Prebiotic Fiber" },
  { icon: Dumbbell, title: "Protein Rich" },
  { icon: HeartHandshake, title: "Traditional Goodness" },
];

const WhyNativeCrunch = () => {
  return (
    <section className="bg-[#F3E8DB] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-5xl font-serif text-[#6B3F1D] mb-10 md:mb-16">
          Why Choose Native Crunch?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div
                  className="
                    h-16 w-16 md:h-24 md:w-24
                    rounded-full
                    bg-[#8B5E3C]
                    flex items-center justify-center
                    mb-3 md:mb-5
                    transition-transform duration-300
                    hover:scale-105
                  "
                >
                  <Icon size={28} className="md:size-[42px] text-[#F8F2EA]" />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[#6B3F1D]
                    font-semibold
                    uppercase
                    tracking-wide
                    leading-5
                    text-xs md:text-sm
                    max-w-[120px]
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