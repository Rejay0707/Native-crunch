import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterContainer = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Backend registration API will go here later.

    navigate("/login");
  };

  return (
    <>

      <AuthLayout
        title="Create Account"
        subtitle="Join Native Crunch and enjoy healthy, handcrafted snacks delivered to your doorstep."
      >
        <RegisterForm onSubmit={handleRegister} />
      </AuthLayout>

    </>
  );
};

export default RegisterContainer;
