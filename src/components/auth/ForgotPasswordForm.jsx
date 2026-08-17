import { Link } from "react-router-dom";

const ForgotPasswordForm = ({ onSubmit, loading, error }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

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
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          disabled={loading}
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
            disabled:cursor-not-allowed
            disabled:bg-gray-50
          "
        />
      </div>

      {/* Send OTP */}
      <button
        type="submit"
        disabled={loading}
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
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "Sending OTP..." : "Send OTP"}
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
