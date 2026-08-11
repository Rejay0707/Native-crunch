import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

const ForgotPasswordContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend Send OTP API will go here later.
    // For now, navigate to OTP verification page.
    navigate("/verify-otp");
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email address and we'll send you an OTP to reset your password."
    >
      <ForgotPasswordForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default ForgotPasswordContainer;
