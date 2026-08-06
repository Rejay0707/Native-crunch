import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Our Location",
    description: "SAM'S FOOD INDUSTRIES, 4/383-D, Indl. Kammangalam, Dharmapuri-635 111, Tamil Nadu, India.",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91 70103 00199",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "info@nativecrunch.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon - Sat • 9:00 AM - 6:00 PM",
  },
];

const ContactInfo = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#2E1E13]">
            Reach Us Anytime
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5C4033]">
            Whether you're placing an order, looking for wholesale
            opportunities, or simply have a question, we're happy to help.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-[#E9DED2] bg-[#F8F2EA] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#5C4033] text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#2E1E13]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#5C4033]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
