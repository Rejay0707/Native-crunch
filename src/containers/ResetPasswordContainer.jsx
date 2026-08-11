import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

const ResetPasswordContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend reset password API will go here later.
    // For now, redirect to login.
    navigate("/login");
  };

  return (
    <AuthLayout
      title="Create New Password"
      subtitle="Create a new password for your Native Crunch account."
    >
      <ResetPasswordForm onSubmit={handleSubmit} />
    </AuthLayout>
  );
};

export default ResetPasswordContainer;
