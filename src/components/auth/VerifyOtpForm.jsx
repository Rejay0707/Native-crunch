import { Link } from "react-router-dom";

const VerifyOtpForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* OTP */}
      <div>
        <label
          htmlFor="otp"
          className="mb-2 block text-sm font-semibold text-[#2E1E13]"
        >
          Enter OTP
        </label>

        <input
          id="otp"
          name="otp"
          type="text"
          inputMode="numeric"
          maxLength={6}
          required
          placeholder="Enter 6-digit OTP"
          className="
    w-full
    rounded-lg
    border
    border-[#D9CEC3]
    bg-white
    px-4
    py-3
    text-center
    text-lg
    font-semibold
    tracking-[0.4em]
    text-[#2E1E13]
    outline-none
    transition
    placeholder:text-sm
    placeholder:tracking-normal
    placeholder:text-[#A69A90]
    focus:border-[#C97A34]
    focus:ring-2
    focus:ring-[#C97A34]/10
  "
        />
      </div>

      {/* Verify */}
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
        Verify OTP
      </button>

      {/* Resend */}
      <div className="text-center text-sm text-[#6A5B4E]">
        Didn't receive the OTP?{" "}
        <button
          type="button"
          className="cursor-pointer font-semibold text-[#C97A34] hover:text-[#A85F24]"
        >
          Resend OTP
        </button>
      </div>

      {/* Back */}
      <p className="text-center text-sm text-[#6A5B4E]">
        <Link
          to="/forgot-password"
          className="font-semibold text-[#C97A34] hover:text-[#A85F24]"
        >
          Change Email
        </Link>
      </p>
    </form>
  );
};

export default VerifyOtpForm;
