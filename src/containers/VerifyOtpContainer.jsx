import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import VerifyOtpForm from "../components/auth/VerifyOtpForm";

import { verifyResetOtp } from "../api/authApi";

const VerifyOtpContainer = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const otp = formData.get("otp");
    

    try {
      const email = sessionStorage.getItem("resetEmail");


      if (!email) {
        setError("Reset session expired. Please request a new OTP.");
        setLoading(false);
        return;
      }

      const response = await verifyResetOtp({
        email,
        otp,
      });


      const resetToken = response.reset_token;

      if (!resetToken) {
        setError("Unable to verify OTP. Please request a new OTP.");
        setLoading(false);
        return;
      }

      // Store token for reset password step
      sessionStorage.setItem("resetToken", resetToken);

      navigate("/reset-password");
    } catch (error) {
      console.error("OTP verification error:", error);


      const message =
        error.response?.data?.message ||
        "Unable to verify OTP. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the OTP sent to your email address."
    >
      <VerifyOtpForm onSubmit={handleSubmit} loading={loading} error={error} />
    </AuthLayout>
  );
};

export default VerifyOtpContainer;
