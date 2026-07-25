import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-[#F8F2EA]">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-[#C97A34]/30 bg-[#C97A34]/10 px-4 py-2 text-sm font-medium tracking-wide text-[#8B5E3C]"
        >
          GET IN TOUCH
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-[#2E1E13] md:text-6xl"
        >
          We'd Love to Hear From You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-3xl text-lg leading-8 text-[#5C4033]"
        >
          Have questions about our wholesome snacks, custom gift boxes, or
          wholesale partnerships? Our team is here to help and will respond as
          quickly as possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@nativecrunch.com"
            className="flex items-center gap-2 rounded-full bg-[#5C4033] px-6 py-3 text-white transition hover:bg-[#4A3227]"
          >
            <Mail size={18} />
            Email Us
          </a>

          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 rounded-full border border-[#5C4033] px-6 py-3 text-[#5C4033] transition hover:bg-[#5C4033] hover:text-white"
          >
            <Phone size={18} />
            Call Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;