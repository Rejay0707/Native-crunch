import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ananya R",
    location: "Chennai",
    review:
      "The Peanut Butter Bars are incredibly fresh and satisfying. The natural ingredients and balanced sweetness make them my go-to snack every day.",
  },
  {
    id: 2,
    name: "Rahul M",
    location: "Bengaluru",
    review:
      "I love that these bars use palm jaggery instead of refined sugar. The taste is authentic, wholesome, and perfect for a quick energy boost.",
  },
  {
    id: 3,
    name: "Priya S",
    location: "Coimbatore",
    review:
      "The Pumpkin Bars exceeded my expectations. Clean ingredients, great texture, and convenient packaging make them ideal for travel.",
  },
  {
    id: 4,
    name: "Arjun K",
    location: "Madurai",
    review:
      "Perfect for my post-workout snack. The ingredients are clean, and the bars keep me full for hours.",
  },
  {
    id: 5,
    name: "Divya P",
    location: "Hyderabad",
    review:
      "The taste feels homemade and authentic. It's refreshing to find snacks without unnecessary additives.",
  },
  {
    id: 6,
    name: "Karthik V",
    location: "Kochi",
    review:
      "My kids love these bars, and I love the nutritional value. A perfect healthy snack option.",
  },
  {
    id: 7,
    name: "Sneha N",
    location: "Mumbai",
    review:
      "The Palm Jaggery range has become a staple in my pantry. Great flavour and excellent quality.",
  },
  {
    id: 8,
    name: "Vikram S",
    location: "Pune",
    review:
      "Convenient, tasty, and made with natural ingredients. Exactly what I was looking for.",
  },
];

const firstRow = testimonials.slice(0, 4);
const secondRow = testimonials.slice(4);

const TestimonialCard = ({ item }) => (
  <div
    className="
      w-[320px]
      shrink-0
      rounded-2xl
      border
      border-[#E7D7C4]
      bg-white
      p-6
      shadow-sm
    "
  >
    <div className="mb-4 flex gap-1 text-[#D4A373]">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={16} />
      ))}
    </div>

    <p className="mb-6 min-h-[110px] text-[15px] leading-7 text-[#5E3D26]">
      "{item.review}"
    </p>

    <div className="border-t border-[#F1E5D8] pt-4">
      <h3 className="font-bold text-[#2E1E13]">{item.name}</h3>

      <p className="mt-1 text-sm text-[#8B6B52]">{item.location}</p>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="overflow-hidden bg-[#F8F2EA] py-16 md:py-20">
      <div className="w-full px-3 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-[#c7b299]" />

          <h2
            className="
              whitespace-nowrap
              text-xl
              font-black
              uppercase
              tracking-wide
              text-[#8B5E3C]
              md:text-5xl
            "
          >
            What Our Customers Say
          </h2>

          <div className="h-px flex-1 bg-[#c7b299]" />
        </motion.div>

        {/* First Row */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...firstRow, ...firstRow].map((item, index) => (
              <TestimonialCard key={`${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...secondRow, ...secondRow].map((item, index) => (
              <TestimonialCard key={`${item.id}-${index}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
