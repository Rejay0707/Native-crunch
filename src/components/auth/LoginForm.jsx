import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
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

      <div>
        <label className="mb-2 block font-medium text-[#2E1E13]">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none transition focus:border-[#C97A34]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          type="button"
          className="text-sm font-medium text-[#C97A34] hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <button
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
        Login
      </button>

      <p className="text-center text-sm text-[#6A5B4E]">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-[#C97A34]">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
