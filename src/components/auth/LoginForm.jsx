import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-[#2E1E13]"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="
            w-full
            rounded-lg
            border
            border-[#D9CEC3]
            bg-white
            px-4
            py-3
            text-sm
            text-[#2E1E13]
            outline-none
            transition
            placeholder:text-[#A69A90]
            focus:border-[#C97A34]
            focus:ring-2
            focus:ring-[#C97A34]/10
          "
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-[#2E1E13]"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            className="
              w-full
              rounded-lg
              border
              border-[#D9CEC3]
              bg-white
              px-4
              py-3
              pr-12
              text-sm
              text-[#2E1E13]
              outline-none
              transition
              placeholder:text-[#A69A90]
              focus:border-[#C97A34]
              focus:ring-2
              focus:ring-[#C97A34]/10
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              cursor-pointer
              text-[#8A796B]
              transition
              hover:text-[#2E1E13]
            "
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between gap-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#6A5B4E]">
          <input
            type="checkbox"
            className="h-4 w-4 cursor-pointer accent-[#C97A34]"
          />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="
    cursor-pointer
    text-sm
    font-medium
    text-[#C97A34]
    transition
    hover:text-[#A85F24]
  "
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="
          w-full
          cursor-pointer
          rounded-lg
          bg-[#C97A34]
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-[#B66E2F]
          active:scale-[0.99]
        "
      >
        Login
      </button>

      {/* Register */}
      <p className="pt-1 text-center text-sm text-[#6A5B4E]">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-[#C97A34] transition hover:text-[#A85F24]"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
