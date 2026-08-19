import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterForm = ({ onSubmit, loading, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Error Message */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Name */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block font-medium text-[#2E1E13]"
          >
            First Name
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="John"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              transition
              focus:border-[#C97A34]
            "
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block font-medium text-[#2E1E13]"
          >
            Last Name
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Doe"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              transition
              focus:border-[#C97A34]
            "
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-medium text-[#2E1E13]"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            transition
            focus:border-[#C97A34]
          "
        />
      </div>

      {/* Mobile */}
      <div>
        <label
          htmlFor="mobile"
          className="mb-2 block font-medium text-[#2E1E13]"
        >
          Mobile Number
        </label>

        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          placeholder="+91 9876543210"
          className="
            w-full
            rounded-xl
            border
            border-gray-300
            px-4
            py-3
            outline-none
            transition
            focus:border-[#C97A34]
          "
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block font-medium text-[#2E1E13]"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Create password"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              pr-12
              outline-none
              transition
              focus:border-[#C97A34]
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              cursor-pointer
              text-gray-500
              transition
              hover:text-[#2E1E13]
            "
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="password_confirmation"
          className="mb-2 block font-medium text-[#2E1E13]"
        >
          Confirm Password
        </label>

        <div className="relative">
          <input
            id="password_confirmation"
            name="password_confirmation"
            type={showConfirmPassword ? "text" : "password"}
            required
            placeholder="Confirm password"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              pr-12
              outline-none
              transition
              focus:border-[#C97A34]
            "
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              cursor-pointer
              text-gray-500
              transition
              hover:text-[#2E1E13]
            "
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 text-sm text-[#6A5B4E]">
        <input
          type="checkbox"
          required
          className="mt-1 cursor-pointer accent-[#C97A34]"
        />

        <span>
          I agree to the{" "}
          <Link
            to="/terms-and-conditions"
            className="font-medium text-[#C97A34] hover:underline"
          >
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy-policy"
            className="font-medium text-[#C97A34] hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          cursor-pointer
          rounded-xl
          bg-[#C97A34]
          py-3
          font-semibold
          text-white
          transition
          hover:bg-[#b66e2f]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      {/* Login */}
      <p className="text-center text-sm text-[#6A5B4E]">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#C97A34] hover:text-[#A85F24]"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
