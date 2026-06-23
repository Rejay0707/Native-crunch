import { motion } from "framer-motion";
import logo from "../../assets/logo (2).png";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{
        opacity: 0,
        y: 60,
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
        duration: 0.8,
      }}
      className="bg-[#2E1E13] text-white mt-2"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Native Crunch Logo"
                className="h-12 w-auto object-contain"
              />

              <div>
                <h3 className="font-bold text-xl">Native Crunch</h3>

                <p className="text-sm text-gray-300">Honest Snacking</p>
              </div>
            </div>

            <p className="mt-5 text-gray-300 leading-7">
              Plant-powered snacks made with real ingredients, natural flavours
              and no refined sugar.
            </p>

            <div className="flex gap-4 mt-6 text-xl">
              <span className="cursor-pointer hover:scale-110 transition">
                📷
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                🐦
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                ✉️
              </span>
            </div>
          </div>

          {/* Shop */}

          <div>
            <h4 className="font-semibold text-lg mb-5">Shop</h4>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition">
                All Bars
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Peanut Butter Bars
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Peanut Chikki Bars
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Specialty Bars
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 className="font-semibold text-lg mb-5">Company</h4>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Ingredients
              </li>

              <li className="hover:text-white cursor-pointer transition">
                FAQs
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Newsletter */}

          <div>
            <h4 className="font-semibold text-lg mb-5">Stay Updated</h4>

            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates on new flavours and special offers.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-white
                  text-[#2E1E13]
                  placeholder:text-gray-400
                  border-2
                  border-transparent
                  outline-none
                  focus:border-[#C97A34]
                  transition-all
                "
              />

              <button
                className="
                  bg-[#C97A34]
                  hover:bg-[#b86d2d]
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  hover:scale-[1.02]
                  active:scale-95
                  cursor-pointer
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-[#4a3427]
            mt-14
            pt-8
            text-center
            text-gray-400
            text-sm
          "
        >
          © 2025 Native Crunch. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
