import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import logo from "../../assets/logo (2).png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navButtonClass =
    "cursor-pointer px-5 py-5 text-base font-medium text-[#F8F1E7] transition-colors duration-200 hover:text-white";

  const dropdownClass = `
    absolute left-0 top-full mt-1 w-80
    rounded-2xl border border-[#ece2d7]
    bg-white p-6 shadow-xl
    opacity-0 invisible translate-y-3
    transition-all duration-300
    group-hover:visible
    group-hover:translate-y-0
    group-hover:opacity-100
  `;

  return (
    <header className="cardboard-bg sticky top-0 z-50 border-b border-[#9a6f4a]">
      <div className="px-3">
        <div className="flex h-16 items-center">

          {/* LOGO + BRAND (HOME LINK) */}
          <Link
            to="/"
            className="flex flex-1 items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Native Crunch"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="flex flex-col leading-tight">
              <h2
                className="text-[22px] sm:text-[26px] lg:text-[30px] font-semibold tracking-[0.06em] text-[#F8F1E7]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Native Crunch
              </h2>

            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <div className="group relative">
              <button className={navButtonClass}>Shop</button>
              <div className={`${dropdownClass} w-72`}>
                <h3 className="border-b border-[#ece2d7] pb-2 text-lg font-semibold text-black">
                  By Category
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="cursor-pointer text-black hover:text-[#8B5E3C]">
                    Peanut Butter Bars
                  </li>
                  <li className="cursor-pointer text-black hover:text-[#8B5E3C]">
                    Peanut Chikki Bars
                  </li>
                  <li className="cursor-pointer text-black hover:text-[#8B5E3C]">
                    Specialty Bars
                  </li>
                </ul>
              </div>
            </div>

            <span className="text-[#ead9c8]">|</span>

            <div className="group relative">
              <button className={navButtonClass}>Products</button>
              <div className={dropdownClass}>
                <h3 className="border-b border-[#ece2d7] pb-2 text-lg font-semibold text-black">
                  Featured Products
                </h3>
                <p className="mt-4 text-base leading-7 text-[#4a4a4a]">
                  Discover our clean energy snack bars crafted using palm jaggery,
                  peanuts, and natural ingredients.
                </p>
              </div>
            </div>

            <span className="text-[#ead9c8]">|</span>

            <div className="group relative">
              <button
                onClick={() => navigate("/about")}
                className={navButtonClass}
              >
                About Us
              </button>

              <div className={dropdownClass}>
                <h3 className="border-b border-[#ece2d7] pb-2 text-lg font-semibold text-black">
                  About Native Crunch
                </h3>
                <p className="mt-4 text-base leading-7 text-[#4a4a4a]">
                  We create clean, wholesome snacks made with natural ingredients,
                  traditional recipes, and honest flavours for modern lifestyles.
                </p>
              </div>
            </div>

            <span className="text-[#ead9c8]">|</span>

            <div className="group relative">
              <button className={navButtonClass}>Contact</button>
              <div className={dropdownClass}>
                <h3 className="border-b border-[#ece2d7] pb-2 text-lg font-semibold text-black">
                  Get In Touch
                </h3>
                <p className="mt-4 text-base leading-7 text-[#4a4a4a]">
                  Have questions about our products or wholesale opportunities?
                  We'd love to hear from you.
                </p>
              </div>
            </div>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex flex-1 items-center justify-end gap-2">

            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b897]/40 bg-white/15 text-[#F8F1E7] hover:bg-white/25">
              <Search size={18} />
            </button>

            <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b897]/40 bg-white/15 text-[#F8F1E7] hover:bg-white/25">
              <User size={18} />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b897]/40 bg-white/15 text-[#F8F1E7] hover:bg-white/25">
              <ShoppingBag size={18} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#F8F1E7]"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="border-t border-[#c79d74]/40 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              <button onClick={() => navigate("/")} className="text-left text-[#F8F1E7]">
                Home
              </button>

              <button className="text-left text-[#F8F1E7]">Shop</button>
              <button className="text-left text-[#F8F1E7]">Products</button>

              <button
                onClick={() => {
                  navigate("/about");
                  setIsOpen(false);
                }}
                className="text-left text-[#F8F1E7]"
              >
                About Us
              </button>

              <button className="text-left text-[#F8F1E7]">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;