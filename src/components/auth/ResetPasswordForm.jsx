import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ResetPasswordForm = ({ onSubmit, loading, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* New Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-[#2E1E13]"
        >
          New Password
        </label>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            placeholder="Enter new password"
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
            aria-label={
              showPassword ? "Hide password" : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={19} />
            ) : (
              <Eye size={19} />
            )}
          </button>
        </div>

        <p className="mt-2 text-xs text-[#8A796B]">
          Password must be at least 8 characters.
        </p>
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-semibold text-[#2E1E13]"
        >
          Confirm Password
        </label>

        <div className="relative">
          <input
            id="confirmPassword"
            name="password_confirmation"
            type={showConfirmPassword ? "text" : "password"}
            required
            minLength={6}
            placeholder="Confirm your password"
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
            onClick={() =>
              setShowConfirmPassword((prev) => !prev)
            }
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
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
          >
            {showConfirmPassword ? (
              <EyeOff size={19} />
            ) : (
              <Eye size={19} />
            )}
          </button>
        </div>
      </div>

      {/* Reset Password */}
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
        {loading ? "Resetting Password..." : "Reset Password"}
      </button>
    </form>
  );
};

export default ResetPasswordForm;