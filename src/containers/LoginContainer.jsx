import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Backend login API will go here later.
    // For now just redirect to home.

    navigate("/");
  };

  return (
    <>
      <AuthLayout
        title="Welcome Back"
        subtitle="Sign in to continue shopping with Native Crunch."
      >
        <LoginForm onSubmit={handleLogin} />
      </AuthLayout>
    </>
  );
};

export default LoginContainer;
