import { motion } from "framer-motion";
import logo from "../../assets/logo (2).png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = ({ isAboutPage = false }) => {
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
              {isAboutPage ? (
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
              )}

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

          {/* Social Media */}

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nativecrunch.nc"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#C97A34] flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram className="text-white text-lg" />
              </a>

              <a
                href="https://www.facebook.com/NativeCrunch2"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#C97A34] flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>

              <a
                href="https://www.youtube.com/@NativeCrunch-NC"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#C97A34] flex items-center justify-center hover:scale-110 transition"
              >
                <FaYoutube className="text-white text-lg" />
              </a>

              <a
                href="https://x.com/NativeCrunchNC"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#C97A34] flex items-center justify-center hover:scale-110 transition"
              >
                <FaXTwitter className="text-white text-lg" />
              </a>
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
