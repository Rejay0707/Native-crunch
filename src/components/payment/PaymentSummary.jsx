import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { load } from "@cashfreepayments/cashfree-js";

import { useAuth } from "../../context/useAuth";
import { initiatePayment } from "../../api/paymentApi";

const PaymentSummary = ({
  order,
  shippingDetails,
  paymentMethod,
}) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handlePayment = async () => {
    if (isProcessing) {
      return;
    }

    setPaymentError("");

    console.log("=================================");
    console.log("PAYMENT STARTED");
    console.log("=================================");

    console.log("Order:", order);
    console.log("Numeric Order ID:", order?.id);
    console.log("Order Number:", order?.order_number);
    console.log("Token exists:", !!token);
    console.log("Payment Method:", paymentMethod);

    // -----------------------------
    // Validate order
    // -----------------------------
    if (!order?.id) {
      setPaymentError("Order information is missing.");
      return;
    }

    // -----------------------------
    // Validate token
    // -----------------------------
    if (!token) {
      setPaymentError("Your login session has expired. Please login again.");
      return;
    }

    try {
      setIsProcessing(true);

      // ==================================================
      // STEP 1: INITIATE PAYMENT
      // ==================================================

      console.log("STEP 1: Calling payment initiation API...");

      const result = await initiatePayment(order.id, token);

      console.log("Payment initiation response:", result);

      if (!result) {
        throw new Error("Empty response received from payment API.");
      }

      const paymentSessionId = result.payment_session_id;

      console.log(
        "Payment Session ID:",
        paymentSessionId,
      );

      if (!paymentSessionId) {
        throw new Error(
          "Payment session ID was not returned by the backend.",
        );
      }

      // ==================================================
      // STEP 2: LOAD CASHFREE
      // ==================================================

      console.log("STEP 2: Loading Cashfree SDK...");

      const cashfree = await load({
        mode: "sandbox",
      });

      console.log("Cashfree object:", cashfree);

      if (!cashfree) {
        throw new Error(
          "Unable to load Cashfree payment SDK.",
        );
      }

      // ==================================================
      // STEP 3: OPEN CASHFREE CHECKOUT
      // ==================================================

      console.log(
        "STEP 3: Opening Cashfree checkout...",
      );

      console.log(
        "Redirect target: _self",
      );

      console.log(
        "Payment Session:",
        paymentSessionId,
      );

      const checkoutResult = await cashfree.checkout({
        paymentSessionId: paymentSessionId,
        redirectTarget: "_self",
      });

      console.log(
        "Cashfree checkout returned:",
        checkoutResult,
      );

      /*
        IMPORTANT:

        Normally Cashfree takes control of the browser
        and redirects the customer to the Cashfree
        payment page.

        After payment, Cashfree should redirect to:

        /success?order_id=NCXXXXXXXX
      */
    } catch (error) {
      console.error(
        "=================================",
      );

      console.error(
        "PAYMENT ERROR",
        error,
      );

      console.error(
        "Error message:",
        error?.message,
      );

      console.error(
        "Error name:",
        error?.name,
      );

      console.error(
        "Error stack:",
        error?.stack,
      );

      console.error(
        "=================================",
      );

      setPaymentError(
        error?.message ||
          "Unable to start payment. Please try again.",
      );

      setIsProcessing(false);
    }
  };

  return (
    <div className="sticky top-28 rounded-3xl bg-white p-6 shadow-lg">

      {/* ================================
          SHIPPING ADDRESS
      ================================= */}

      <div className="mb-6 rounded-xl border border-[#E8D8C8] bg-[#FAF7F2] p-4">

        <div className="mb-3 flex items-center justify-between">

          <h3 className="font-semibold text-[#2E1E13]">
            Shipping Address
          </h3>

          <button
            type="button"
            onClick={() => navigate("/checkout")}
            className="cursor-pointer text-sm font-medium text-[#C97A34] hover:underline"
          >
            Edit
          </button>

        </div>

        {shippingDetails ? (
          <>
            <p className="font-medium text-[#2E1E13]">
              {shippingDetails.fullName}
            </p>

            <p className="text-sm text-gray-600">
              {shippingDetails.mobile}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {shippingDetails.address}
            </p>

            <p className="text-sm text-gray-600">
              {shippingDetails.landmark &&
                `${shippingDetails.landmark}, `}

              {shippingDetails.city},{" "}
              {shippingDetails.state} -{" "}
              {shippingDetails.pincode}
            </p>
          </>
        ) : (
          <p className="text-sm text-red-500">
            Shipping address not available.
          </p>
        )}

      </div>

      {/* ================================
          ORDER NUMBER
      ================================= */}

      <div className="mb-6">

        <p className="text-sm text-gray-500">
          Order Number
        </p>

        <p className="font-semibold text-[#2E1E13]">
          {order?.order_number || "N/A"}
        </p>

      </div>

      {/* ================================
          ORDER SUMMARY
      ================================= */}

      <h2 className="mb-6 text-2xl font-bold text-[#2E1E13]">
        Order Summary
      </h2>

      <div className="space-y-5">

        {order?.items?.length > 0 ? (
          order.items.map((item, index) => {

            const itemTotal =
              item.subtotal ??
              item.total ??
              (Number(item.price) || 0) *
                (Number(item.quantity) || 0);

            return (
              <div
                key={item.id || index}
                className="flex items-center justify-between gap-4"
              >

                <div>

                  <p className="font-semibold text-[#2E1E13]">
                    {item.product_name ||
                      item.name ||
                      "Product"}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.weight &&
                      `${item.weight} × `}
                    {item.quantity}
                  </p>

                </div>

                <p className="font-semibold text-[#2E1E13]">
                  ₹{itemTotal}
                </p>

              </div>
            );
          })
        ) : (
          <p className="text-sm text-gray-500">
            No items found in this order.
          </p>
        )}

      </div>

      <hr className="my-6" />

      {/* ================================
          SUBTOTAL
      ================================= */}

      <div className="flex justify-between">

        <span>
          Subtotal
        </span>

        <span>
          ₹{order?.subtotal ?? 0}
        </span>

      </div>

      {/* ================================
          SHIPPING
      ================================= */}

      <div className="mt-3 flex justify-between">

        <span>
          Shipping
        </span>

        {Number(order?.shipping_charge) === 0 ? (
          <span className="font-semibold text-green-600">
            FREE
          </span>
        ) : (
          <span>
            ₹{order?.shipping_charge ?? 0}
          </span>
        )}

      </div>

      <hr className="my-6" />

      {/* ================================
          TOTAL
      ================================= */}

      <div className="flex justify-between text-xl font-bold">

        <span>
          Total
        </span>

        <span>
          ₹{order?.total ?? 0}
        </span>

      </div>

      {/* ================================
          PAYMENT METHOD
      ================================= */}

      <div className="mt-5 rounded-xl bg-[#FAF7F2] p-4">

        <p className="text-sm text-gray-500">
          Payment Method
        </p>

        <p className="mt-1 font-semibold uppercase text-[#2E1E13]">
          {paymentMethod}
        </p>

      </div>

      {/* ================================
          ERROR
      ================================= */}

      {paymentError && (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {paymentError}
        </div>
      )}

      {/* ================================
          PAY NOW
      ================================= */}

      <button
        type="button"
        onClick={handlePayment}
        disabled={isProcessing}
        className="
          mt-8
          w-full
          cursor-pointer
          rounded-full
          bg-[#C97A34]
          py-4
          font-semibold
          text-white
          transition
          hover:bg-[#B66E2F]
          disabled:cursor-not-allowed
          disabled:bg-gray-300
        "
      >
        {isProcessing
          ? "Opening Payment..."
          : "Pay Now"}
      </button>

    </div>
  );
};

export default PaymentSummary;