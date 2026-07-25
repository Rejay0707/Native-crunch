import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Orders are usually processed within 1–2 business days. Delivery timelines depend on your location.",
  },
  {
    question: "Do you accept bulk or wholesale orders?",
    answer:
      "Yes. We work with retailers, corporate clients, and event organizers. Contact us with your requirements.",
  },
  {
    question: "Can I customize a gift box?",
    answer:
      "Absolutely. You can personalize your gift box by selecting products, adding a custom message, and uploading a photo.",
  },
  {
    question: "Are your products made with natural ingredients?",
    answer:
      "Yes. We focus on wholesome ingredients without unnecessary additives while maintaining great taste.",
  },
];

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="rounded-full bg-[#C97A34]/10 px-4 py-2 text-sm font-medium text-[#8B5E3C]">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#2E1E13]">
            Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5C4033]">
            Find quick answers to the questions we receive most often.
          </p>
        </motion.div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-[#E9DED2] bg-[#F8F2EA]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-[#2E1E13]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-[#E9DED2] px-6 py-5 text-[#5C4033] leading-7">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
