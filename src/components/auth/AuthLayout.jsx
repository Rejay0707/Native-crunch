import { motion } from "framer-motion";
import logo from "../../assets/logo3 (2).png";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-screen bg-[#F8F2EA] px-4 py-8 sm:px-6">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[620px]"
        >
          {/* Login Card */}
          <div className="rounded-2xl border border-[#E8DED3] bg-white px-6 py-8 shadow-[0_12px_40px_rgba(46,30,19,0.10)] sm:px-10 sm:py-10">
            
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src={logo}
                alt="Native Crunch"
                className="h-24 w-auto object-contain"
              />
            </div>

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#2E1E13] sm:text-4xl">
                {title}
              </h1>

              <p className="mt-2 text-sm leading-6 text-[#6A5B4E]">
                {subtitle}
              </p>
            </div>

            {/* Form */}
            <div className="mt-8">
              {children}
            </div>
          </div>

          {/* Small branding below card */}
          <p className="mt-6 text-center text-xs text-[#8A796B]">
            © {new Date().getFullYear()} Native Crunch. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthLayout;