import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import logo from "../../assets/logo (2).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F2EA]/90 backdrop-blur-sm border-b border-[#ece2d7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Native Crunch Logo"
              className="
      h-12
      w-auto
      object-contain
    "
            />

            <div>
              <h2 className="font-bold text-[#2E1E13]">Native Crunch</h2>

              <p className="text-xs text-gray-500">Real Ingredient Snacks</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#home"
              className="font-medium text-[#2E1E13] hover:text-[#C97A34] transition-colors"
            >
              Home
            </a>

            <a
              href="#products"
              className="font-medium text-[#2E1E13] hover:text-[#C97A34] transition-colors"
            >
              Products
            </a>

            <a
              href="#categories"
              className="font-medium text-[#2E1E13] hover:text-[#C97A34] transition-colors"
            >
              Categories
            </a>

            <a
              href="#contact"
              className="font-medium text-[#2E1E13] hover:text-[#C97A34] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Shopping Bag */}
            <button
              className="
                h-11
                w-11
                rounded-full
                bg-white
                border
                border-[#ece2d7]
                flex
                items-center
                justify-center
                hover:shadow-md
                transition-all
              "
            >
              <ShoppingBag size={18} />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                flex
                flex-col
                justify-center
                gap-1.5
              "
            >
              <span
                className={`
                  block h-[2px] w-6 bg-[#2E1E13]
                  transition-all
                  ${isOpen ? "rotate-45 translate-y-[7px]" : ""}
                `}
              />

              <span
                className={`
                  block h-[2px] w-6 bg-[#2E1E13]
                  transition-all
                  ${isOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  block h-[2px] w-6 bg-[#2E1E13]
                  transition-all
                  ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}
                `}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              md:hidden
              pb-6
              flex
              flex-col
              gap-4
              border-t
              border-[#ece2d7]
              pt-5
            "
          >
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="font-medium"
            >
              Home
            </a>

            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="font-medium"
            >
              Products
            </a>

            <a
              href="#categories"
              onClick={() => setIsOpen(false)}
              className="font-medium"
            >
              Categories
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
