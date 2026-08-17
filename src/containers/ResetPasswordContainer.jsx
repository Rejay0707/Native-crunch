import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

import { resetPassword } from "../api/authApi";

const ResetPasswordContainer = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const password = formData.get("password");
    const passwordConfirmation = formData.get("password_confirmation");

    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const email = sessionStorage.getItem("resetEmail");
      const token = sessionStorage.getItem("resetToken");

      // Check what is actually stored
      console.log("Reset email:", email);
      console.log("Reset token:", token);

      if (!email) {
        setError("Reset session expired. Please request a new OTP.");
        setLoading(false);
        return;
      }

      console.log("Calling reset password API...");

      const response = await resetPassword({
        email,
        token,
        password,
        password_confirmation: passwordConfirmation,
      });

      console.log("Password reset successful:", response);

      sessionStorage.removeItem("resetEmail");
      sessionStorage.removeItem("resetToken");

      navigate("/login");
    } catch (error) {
      console.error("Reset password error:", error);

      const message =
        error.response?.data?.message ||
        "Unable to reset password. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Create a new password for your Native Crunch account."
    >
      <ResetPasswordForm
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </AuthLayout>
  );
};

export default ResetPasswordContainer;
