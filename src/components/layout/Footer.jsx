import logo from "../../assets/logo3 (2).png";
import { Link, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();

  const isShopPage = location.pathname === "/shop";
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";

  return (
    <footer id="contact" className="bg-[#2E1E13] text-white mt-2">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-8 md:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Native Crunch Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />

                <div>
                  <h3 className="font-bold text-lg md:text-xl">
                    Native Crunch
                  </h3>

                  <p className="text-xs md:text-sm text-gray-300">
                    Snack in Native Way
                  </p>
                </div>
              </div>
            </Link>

            <p className="mt-4 md:mt-5 text-sm md:text-base text-gray-300 leading-6 md:leading-7">
              Inspired by traditional recipes, crafted with carefully selected
              ingredients and made for today's lifestyle. Every bite brings
              together authentic taste, quality and convenience.
            </p>
          </div>

          {/* Shop */}
          {!isShopPage && (
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-4 md:mb-5">
                <Link to="/shop">Shop</Link>
              </h4>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                <li>
                  <Link
                    to="/shop"
                    className="hover:text-white transition cursor-pointer"
                  >
                    All Bars
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className="hover:text-white transition cursor-pointer"
                  >
                    Peanut Butter Bars
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className="hover:text-white transition cursor-pointer"
                  >
                    Peanut Chikki Bars
                  </Link>
                </li>

                <li>
                  <Link
                    to="/shop"
                    className="hover:text-white transition cursor-pointer"
                  >
                    Specialty Bars
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Company */}
          {!isAboutPage && !isContactPage && (
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-4 md:mb-5">
                Company
              </h4>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-white transition">
                    Ingredients
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Company section when on About page */}
          {isAboutPage && (
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-4 md:mb-5">
                Company
              </h4>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Company section when on Contact page */}
          {isContactPage && (
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-4 md:mb-5">
                Company
              </h4>

              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-white transition">
                    Ingredients
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4 md:mb-5">
              Policies
            </h4>

            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-white transition"
                >
                  Refund & Cancellation
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping-policy"
                  className="hover:text-white transition"
                >
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h4 className="mb-4 text-base font-semibold md:text-lg">
              Follow Us
            </h4>

            {/* Social Icons */}
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://www.instagram.com/nativecrunch.nc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C97A34] transition hover:scale-110 md:h-10 md:w-10"
              >
                <FaInstagram className="text-sm text-white md:text-lg" />
              </a>

              <a
                href="https://www.facebook.com/NativeCrunch2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C97A34] transition hover:scale-110 md:h-10 md:w-10"
              >
                <FaFacebookF className="text-sm text-white md:text-lg" />
              </a>

              <a
                href="https://www.youtube.com/@NativeCrunch-NC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C97A34] transition hover:scale-110 md:h-10 md:w-10"
              >
                <FaYoutube className="text-sm text-white md:text-lg" />
              </a>

              <a
                href="https://x.com/NativeCrunchNC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C97A34] transition hover:scale-110 md:h-10 md:w-10"
              >
                <FaXTwitter className="text-sm text-white md:text-lg" />
              </a>
            </div>

            {/* Contact Us */}
            <div className="mt-6">
              <h4 className="mb-3 text-base font-semibold md:text-lg">
                Contact Us
              </h4>

              <div className="space-y-2 text-sm text-gray-300 md:text-base">
                <a
                  href="mailto:info@nativecrunch.com"
                  className="block transition hover:text-white"
                >
                  info@nativecrunch.com
                </a>

                <a
                  href="https://wa.me/917010300199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  +91 70103 00199
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#4a3427] mt-10 md:mt-14 pt-6 md:pt-4 text-center text-gray-400 text-xs md:text-sm">
          © 2025 Native Crunch. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
