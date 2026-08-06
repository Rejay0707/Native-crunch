import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Name */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-[#2E1E13]">
            First Name
          </label>

          <input
            type="text"
            required
            placeholder="John"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C97A34]"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-[#2E1E13]">
            Last Name
          </label>

          <input
            type="text"
            required
            placeholder="Doe"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C97A34]"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-medium text-[#2E1E13]">
          Email Address
        </label>

        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C97A34]"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="mb-2 block font-medium text-[#2E1E13]">
          Mobile Number
        </label>

        <input
          type="tel"
          required
          placeholder="+91 9876543210"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#C97A34]"
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block font-medium text-[#2E1E13]">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Create password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-[#C97A34]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2 block font-medium text-[#2E1E13]">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            required
            placeholder="Confirm password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-[#C97A34]"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 text-sm text-[#6A5B4E]">
        <input type="checkbox" required className="mt-1 accent-[#C97A34]" />

        <span>I agree to the Terms & Conditions and Privacy Policy.</span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full
          rounded-xl
          bg-[#C97A34]
          py-3
          font-semibold
          text-white
          transition
          hover:bg-[#b66e2f]
          cursor-pointer
        "
      >
        Create Account
      </button>

      <p className="text-center text-sm text-[#6A5B4E]">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-[#C97A34]">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
