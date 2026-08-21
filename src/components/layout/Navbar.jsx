import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingBag, Search, User, Package, Menu, X } from "lucide-react";
import { useAuth } from "../../context/useAuth";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";
import logo from "../../assets/logo3 (2).png";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  console.log("Navbar user:", user);
  console.log("Authenticated:", isAuthenticated);

  const navigate = useNavigate();
  // const location = useLocation();
  // const isAboutPage = location.pathname === "/about";
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const { cart } = useCart();
  const { orders } = useOrders();
  // const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

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
    <header className="cardboard-bg sticky top-0 z-100 border-b border-[#9a6f4a]">
      <div className="px-3">
        <div className="flex h-16 items-center">
          {/* LOGO + BRAND (HOME LINK) */}
          <Link to="/" className="flex flex-1 items-center gap-3 group">
            <img
              src={logo}
              alt="Native Crunch"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* LOGO + BRAND (HOME LINK) */}

            <div
              className="flex items-center"
              style={{
                lineHeight: "1",
              }}
            >
              <span
                className="text-[24px] font-normal uppercase tracking-[0.18em] text-[#2E1E13]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                NATIVE CRUNCH
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            {/* HOME */}
            <button onClick={() => navigate("/")} className={navButtonClass}>
              Home
            </button>

            <span className="text-[#ead9c8]">|</span>

            {/* SHOP */}
            <div onClick={() => navigate("/shop")} className="group relative">
              <button className={navButtonClass}>Shop</button>

              <div className={`${dropdownClass} w-72`}>
                <h3 className="border-b border-[#ece2d7] pb-2 text-lg font-semibold text-black">
                  By Category
                </h3>

                <ul className="mt-4 space-y-3">
                  <li
                    onClick={() => navigate("/shop?category=peanut-chikki")}
                    className="cursor-pointer text-black hover:text-[#8B5E3C]"
                  >
                    Peanut Chikki Bars
                  </li>
                  <li
                    onClick={() => navigate("/shop?category=palm-jaggery")}
                    className="cursor-pointer text-black hover:text-[#8B5E3C]"
                  >
                    Palm Jaggery Chikki Bar
                  </li>

                  <li
                    onClick={() => navigate("/shop?category=no-added-sugar")}
                    className="cursor-pointer text-black hover:text-[#8B5E3C]"
                  >
                    No Added Sugar
                  </li>

                  <li
                    onClick={() => navigate("/shop?category=peanut-butter")}
                    className="cursor-pointer text-black hover:text-[#8B5E3C]"
                  >
                    Peanut Butter Bars
                  </li>
                </ul>
              </div>
            </div>

            <span className="text-[#ead9c8]">|</span>

            {/* PRODUCTS */}
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  navigate("/login");
                  return;
                }

                navigate("/customization");
              }}
              className={navButtonClass}
            >
              Customization
            </button>

            <>
              <>
                <span className="text-[#ead9c8]">|</span>

                <button
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate("/login");
                      return;
                    }

                    navigate("/orders");
                  }}
                  className={navButtonClass}
                >
                  Orders
                </button>
              </>

              {/* <span className="text-[#ead9c8]">|</span> */}
              <span className="text-[#ead9c8]">|</span>

              {/* ABOUT */}
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
                    We create clean, wholesome snacks made with natural
                    ingredients, traditional recipes, and honest flavours for
                    modern lifestyles.
                  </p>
                </div>
              </div>
            </>

            <span className="text-[#ead9c8]">|</span>

            {/* CONTACT */}
            <div className="group relative">
              <button
                onClick={() => navigate("/contact")}
                className={navButtonClass}
              >
                Contact
              </button>

              <div className={dropdownClass}>
                <h3 className="border-b border-[#ece2d7] pb-2 text-lg font-semibold text-black">
                  Get In Touch
                </h3>

                <p className="mt-4 text-base leading-7 text-[#4a4a4a]">
                  Have questions about our products, bulk orders, or gift boxes?
                  We'd love to hear from you.
                </p>
              </div>
            </div>
          </nav>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <div className="flex flex-1 items-center justify-end gap-2">
            {/* Search - Desktop only */}
            {/* <button
              className="
      hidden
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-[#d8b897]/40
      bg-[#5C4033]
      text-[#F8F1E7]
      transition
      hover:bg-white/25
      md:flex
    "
            >
              <Search size={18} />
            </button> */}

            {/* User - Desktop + Mobile */}
            {/* User - Desktop + Mobile */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  type="button"
                  title={user?.name || "Account"}
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="
        flex
        h-10
        items-center
        gap-2
        rounded-full
        border
        border-[#d8b897]/40
        bg-[#5C4033]
        px-3
        text-[#F8F1E7]
        transition
        hover:bg-white/25
        cursor-pointer
      "
                >
                  <User size={18} />

                  <span className="hidden xl:block max-w-[120px] truncate text-sm">
                    {user?.name}
                  </span>
                </button>

                {isAccountOpen && (
                  <div
                    className="
          absolute
          right-0
          top-full
          mt-2
          w-64
          rounded-xl
          border
          border-[#E8DED3]
          bg-white
          p-4
          shadow-xl
          z-50
        "
                  >
                    {/* User Information */}
                    <div className="border-b border-[#E8DED3] pb-3">
                      <p className="font-semibold text-[#2E1E13]">
                        {user?.name}
                      </p>

                      <p className="mt-1 truncate text-sm text-[#6A5B4E]">
                        {user?.email}
                      </p>
                    </div>

                    {/* My Account */}
                    {/* <button
                      type="button"
                      onClick={() => {
                        navigate("/account");
                        setIsAccountOpen(false);
                      }}
                      className="
            mt-3
            w-full
            rounded-lg
            px-3
            py-2
            text-left
            text-sm
            font-medium
            text-[#2E1E13]
            transition
            hover:bg-[#F8F2EA]
            cursor-pointer
          "
                    >
                      My Account
                    </button> */}

                    {/* Logout */}
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setIsAccountOpen(false);
                        navigate("/login");
                      }}
                      className="
            mt-1
            w-full
            rounded-lg
            px-3
            py-2
            text-left
            text-sm
            font-medium
            text-red-600
            transition
            hover:bg-red-50
            cursor-pointer
          "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                title="Login"
                className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-[#d8b897]/40
      bg-[#5C4033]
      text-[#F8F1E7]
      transition
      hover:bg-white/25
      cursor-pointer
    "
              >
                <User size={18} />
              </button>
            )}

            {/* Orders - Desktop only */}
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  navigate("/login");
                  return;
                }

                navigate("/orders");
              }}
              title="My Orders"
              className="
      hidden
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-[#d8b897]/40
      bg-[#5C4033]
      text-[#F8F1E7]
      transition
      hover:bg-white/25
      cursor-pointer
      md:flex
    "
            >
              <Package size={18} />
            </button>

            {/* Cart - Desktop + Mobile */}
            <button
              onClick={() => {
                navigate("/cart");
              }}
              title="Cart"
              className="
      relative
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-[#5C4033]/40
      bg-[#5C4033]
      text-[#F8F1E7]
      transition
      hover:bg-white/25
      cursor-pointer
    "
            >
              <ShoppingBag size={18} />

              {cart.length > 0 && (
                <span
                  className="
          absolute
          -right-2
          -top-2
          flex
          h-5
          min-w-[22px]
          items-center
          justify-center
          rounded-full
          border
          border-[#C97A34]
          bg-white
          px-1
          text-[10px]
          font-bold
          text-[#C97A34]
          shadow-sm
        "
                >
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-[#F8F1E7] lg:hidden"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="border-t border-[#c79d74]/40 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
                className="text-left text-[#F8F1E7]"
              >
                Home
              </button>

              <button
                onClick={() => navigate("/shop")}
                className="text-left text-[#F8F1E7]"
              >
                Shop
              </button>

              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    navigate("/login");
                    setIsOpen(false);
                    return;
                  }

                  navigate("/customization");
                  setIsOpen(false);
                }}
                className="text-left text-[#F8F1E7]"
              >
                Customization
              </button>

              {/* <span className="text-[#ead9c8]">|</span> */}
              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    navigate("/login");
                    setIsOpen(false);
                    return;
                  }

                  navigate("/orders");
                  setIsOpen(false);
                }}
                className="text-left text-[#F8F1E7]"
              >
                Orders
              </button>

              <button
                onClick={() => {
                  navigate("/about");
                  setIsOpen(false);
                }}
                className="text-left text-[#F8F1E7]"
              >
                About Us
              </button>

              <button
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
                className="text-left text-[#F8F1E7]"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
