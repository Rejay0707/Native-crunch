import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";

import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";
import { useAuth } from "../context/useAuth";

import { createCheckout } from "../api/checkoutApi";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const { cart, increaseQuantity, decreaseQuantity, setCart } = useCart();

  const { setShippingDetails } = useCheckout();
  const { token, isAuthenticated } = useAuth();

  const [checkoutError, setCheckoutError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shippingCharge = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shippingCharge;

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

  const onSubmit = async (data) => {
    setCheckoutError("");

    if (!isAuthenticated || !token) {
      setCheckoutError("Please login before proceeding to checkout.");
      return;
    }

    if (cart.length === 0) {
      setCheckoutError("Your cart is empty.");
      return;
    }

    const invalidItem = cart.find((item) => !item.product_variant_id);

    if (invalidItem) {
      setCheckoutError(
        "One or more cart items are missing a product variant. Please remove the item and add it again.",
      );
      return;
    }

    const checkoutPayload = {
      full_name: data.fullName,
      mobile: data.mobile,
      email: data.email,
      address: data.address,
      landmark: data.landmark || "",
      city: data.city,
      state: data.state,
      pincode: data.pincode,

      items: cart.map((item) => ({
        product_variant_id: Number(item.product_variant_id),
        quantity: Number(item.quantity),
      })),
    };

    console.log("Checkout payload:", checkoutPayload);

    try {
      setIsSubmitting(true);

      const result = await createCheckout(checkoutPayload, token);

      console.log("Checkout response:", result);

      const order = result.order;

      if (!order) {
        throw new Error("Order information was not returned.");
      }

      // Store order information for the next step
      localStorage.setItem(
        "latestOrder",
        JSON.stringify({
          id: order.id,
          order_number: order.order_number,
          subtotal: order.subtotal,
          shipping_charge: order.shipping_charge,
          total: order.total,
          status: order.status,
          payment_status: order.payment_status,
          items: order.items,
        }),
      );

      // Keep shipping details in CheckoutContext
      setShippingDetails(data);

      // IMPORTANT:
      // Clear cart only after successful order creation

      // Go to payment page
      navigate("/payment");
    } catch (error) {
      console.error("Checkout failed:", error);

      if (error.status === 422) {
        setCheckoutError(
          error.data?.message ||
            "There was a problem with your order. Please check your cart and try again.",
        );
      } else {
        setCheckoutError(
          error.message || "Something went wrong while placing your order.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {checkoutError && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {checkoutError}
              </div>
            )}

            <CheckoutForm
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
            />
          </div>

          <OrderSummary
            cart={cart}
            subtotal={subtotal}
            shippingCharge={shippingCharge}
            total={total}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            isSubmitting={isSubmitting}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CheckoutContainer;
