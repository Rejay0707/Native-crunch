import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import VerifyOtpForm from "../components/auth/VerifyOtpForm";

const VerifyOtpContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend OTP verification API will go here later.
    // For now, continue to reset password.
    navigate("/reset-password");
  };

  return (
    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the OTP sent to your email address."
    >
      <VerifyOtpForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default VerifyOtpContainer;
