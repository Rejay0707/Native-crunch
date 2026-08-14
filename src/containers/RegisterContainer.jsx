import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

import { registerUser } from "../api/authApi";

const RegisterContainer = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName")?.trim();
    const lastName = formData.get("lastName")?.trim();
    const email = formData.get("email")?.trim();
    const mobile = formData.get("mobile")?.trim();
    const password = formData.get("password");
    const passwordConfirmation = formData.get("password_confirmation");

    // Check passwords
    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Combine first and last name
    const name = `${firstName} ${lastName}`.trim();

    try {
      const response = await registerUser({
        name,
        email,
        mobile,
        password,
        password_confirmation: passwordConfirmation,
      });

      console.log("Registration successful:", response);

      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);

      const backendErrors = error.response?.data?.errors;

      if (backendErrors) {
        const firstError = Object.values(backendErrors)[0]?.[0];

        setError(firstError || "Registration failed. Please try again.");
      } else {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Registration failed. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Native Crunch and enjoy healthy, handcrafted snacks delivered to your doorstep."
    >
      <RegisterForm onSubmit={handleRegister} loading={loading} error={error} />
    </AuthLayout>
  );
};

export default RegisterContainer;
