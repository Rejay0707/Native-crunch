import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

import { forgotPassword } from "../api/authApi";

const ForgotPasswordContainer = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const email = formData.get("email");

    try {
      const response = await forgotPassword(email);

      console.log("Forgot password response:", response);

      // OTP verification page
      navigate("/verify-otp", {
        state: {
          email,
        },
      });
    } catch (error) {
      console.error("Forgot password error:", error);

      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);

      const message = error.response?.data?.message || "Unable to send OTP.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email address and we'll send you an OTP to reset your password."
    >
      <ForgotPasswordForm
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </AuthLayout>
  );
};

export default ForgotPasswordContainer;
