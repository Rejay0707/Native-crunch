import { motion } from "framer-motion";
import logo from "../../assets/logo3 (2).png";
import heroImage from "../../assets/hero/native-crunch-hero-bg1.png";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-screen bg-[#F8F2EA]">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden flex-col justify-center bg-[#2E1E13] p-16 lg:flex"
        >
          <img
            src={logo}
            alt="Native Crunch"
            className="mb-10 w-44 object-contain"
          />

          <h1 className="text-5xl font-bold leading-tight text-white">
            Welcome to
            <span className="block text-[#C97A34]">Native Crunch</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
            Discover handcrafted peanut bars, palm jaggery snacks, and wholesome
            treats made using traditional recipes and premium natural
            ingredients.
          </p>

          <img
            src={heroImage}
            alt="Native Crunch"
            className="mt-14 w-full object-contain"
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center p-6 lg:p-16"
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl lg:p-10">
            <h2 className="text-4xl font-bold text-[#2E1E13]">{title}</h2>

            <p className="mt-3 text-[#6A5B4E]">{subtitle}</p>

            <div className="mt-8">{children}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthLayout;
