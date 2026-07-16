import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";

const CheckoutContainer = () => {
  const navigate = useNavigate();
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  const { setShippingDetails } = useCheckout();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      address: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  const onSubmit = (data) => {
    setShippingDetails(data);
    // Later we'll save this in context
    navigate("/payment");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CheckoutForm
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </div>

          <OrderSummary
            cart={cart}
            total={total}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CheckoutContainer;
