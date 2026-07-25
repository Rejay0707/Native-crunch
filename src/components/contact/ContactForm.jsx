import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="bg-[#F8F2EA] py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="rounded-full bg-[#C97A34]/10 px-4 py-2 text-sm font-medium text-[#8B5E3C]">
            SEND US A MESSAGE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#2E1E13]">
            We'd Love to Hear Your Thoughts
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5C4033]">
            Whether you have a product inquiry, wholesale request, partnership
            proposal, or feedback, simply fill out the form and our team will
            get back to you as soon as possible.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <h4 className="font-semibold text-[#2E1E13]">✔ Fast Response</h4>
              <p className="text-[#5C4033]">
                We usually reply within one business day.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#2E1E13]">
                ✔ Friendly Support
              </h4>
              <p className="text-[#5C4033]">
                Our team is happy to assist with any questions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#2E1E13]">
                ✔ Wholesale Enquiries
              </h4>
              <p className="text-[#5C4033]">
                Looking for bulk orders? We'd love to work with you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#E9DED2] bg-white p-8 shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-[#E9DED2] px-4 py-3 outline-none focus:border-[#C97A34]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-[#E9DED2] px-4 py-3 outline-none focus:border-[#C97A34]"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-[#E9DED2] px-4 py-3 outline-none focus:border-[#C97A34]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-xl border border-[#E9DED2] px-4 py-3 outline-none focus:border-[#C97A34]"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full rounded-xl border border-[#E9DED2] px-4 py-3 outline-none focus:border-[#C97A34]"
            />

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-[#5C4033] px-6 py-3 font-semibold text-white transition hover:bg-[#4A3227]"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
