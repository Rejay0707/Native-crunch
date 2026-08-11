import { Link } from "react-router-dom";

const ForgotPasswordForm = ({ onSubmit }) => {
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

      {/* Send OTP */}
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
        Send OTP
      </button>

      {/* Back to Login */}
      <p className="pt-1 text-center text-sm text-[#6A5B4E]">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#C97A34] transition hover:text-[#A85F24]"
        >
          Back to Login
        </Link>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
