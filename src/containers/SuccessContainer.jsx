import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SuccessCard from "../components/success/SuccessCard";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/useAuth";
import { getPaymentStatus } from "../api/paymentApi";

const SuccessContainer = () => {
  const [searchParams] = useSearchParams();

  const { setCart } = useCart();
  const { token } = useAuth();

  const orderNumber = searchParams.get("order_id");

  const [paymentStatus, setPaymentStatus] = useState("checking");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("========== SUCCESS PAGE ==========");
    console.log("Order number from URL:", orderNumber);
    console.log("Token available:", !!token);

    if (!orderNumber) {
      console.error("No order_id found in URL.");
      setError("Order number is missing.");
      setPaymentStatus("error");
      return;
    }

    if (!token) {
      console.error("Authentication token is missing.");
      setError("Please login again to check your payment status.");
      setPaymentStatus("error");
      return;
    }

    let cancelled = false;
    let attempts = 0;

    const checkPayment = async () => {
      try {
        attempts++;

        console.log(
          `Checking payment status... Attempt ${attempts}`,
        );

        const result = await getPaymentStatus(
          orderNumber,
          token,
        );

        console.log("Payment status response:", result);

        if (cancelled) {
          return;
        }

        setOrder(result);

        const status = String(
          result.payment_status || "",
        ).toLowerCase();

        console.log("Backend payment_status:", status);

        if (status === "paid") {
          console.log("PAYMENT SUCCESSFUL");

          setPaymentStatus("paid");

          // Clear cart ONLY after backend confirms payment
          setCart([]);

          // Remove temporary order information
          localStorage.removeItem("latestOrder");

          return;
        }

        if (status === "failed") {
          console.log("PAYMENT FAILED");

          setPaymentStatus("failed");

          return;
        }

        // pending / processing / anything else
        console.log("PAYMENT STILL PROCESSING");

        setPaymentStatus("processing");

        if (attempts < 7) {
          setTimeout(checkPayment, 5000);
        } else {
          console.log(
            "Stopped polling after maximum attempts.",
          );
        }
      } catch (err) {
        console.error(
          "Failed to check payment status:",
          err,
        );

        if (!cancelled) {
          setError(
            err.message ||
              "Unable to check payment status.",
          );

          setPaymentStatus("error");
        }
      }
    };

    checkPayment();

    return () => {
      cancelled = true;
    };
  }, [orderNumber, token, setCart]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] py-16">
        <div className="mx-auto max-w-4xl px-6">

          {/* Checking */}
          {paymentStatus === "checking" && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E8D8C8] border-t-[#C97A34]" />

              <h1 className="mt-6 text-2xl font-bold text-[#2E1E13]">
                Checking Payment
              </h1>

              <p className="mt-3 text-gray-600">
                Please wait while we confirm your payment.
              </p>
            </div>
          )}

          {/* Processing */}
          {paymentStatus === "processing" && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E8D8C8] border-t-[#C97A34]" />

              <h1 className="mt-6 text-2xl font-bold text-[#2E1E13]">
                Payment Processing
              </h1>

              <p className="mt-3 text-gray-600">
                Your payment is being processed. Please wait...
              </p>

              {orderNumber && (
                <p className="mt-4 text-sm text-gray-500">
                  Order Number:{" "}
                  <span className="font-semibold text-[#C97A34]">
                    {orderNumber}
                  </span>
                </p>
              )}
            </div>
          )}

          {/* Payment successful */}
          {paymentStatus === "paid" && order && (
            <SuccessCard order={order} />
          )}

          {/* Payment failed */}
          {paymentStatus === "failed" && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <h1 className="text-3xl font-bold text-red-600">
                Payment Failed
              </h1>

              <p className="mt-3 text-gray-600">
                Your payment was not successful.
              </p>

              <p className="mt-4 text-sm text-gray-500">
                Your cart has been kept so you can try again.
              </p>
            </div>
          )}

          {/* Error */}
          {paymentStatus === "error" && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <h1 className="text-2xl font-bold text-red-600">
                Unable to Verify Payment
              </h1>

              <p className="mt-3 text-gray-600">
                {error}
              </p>

              {orderNumber && (
                <p className="mt-4 text-sm text-gray-500">
                  Order Number:{" "}
                  <span className="font-semibold">
                    {orderNumber}
                  </span>
                </p>
              )}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuccessContainer;