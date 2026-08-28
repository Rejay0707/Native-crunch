import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import OrderTracking from "../components/orders/OrderTracking";
import OrderSummaryCard from "../components/orders/OrderSummaryCard";
import DeliveryAddress from "../components/orders/DeliveryAddress";

import { useOrders } from "../context/OrderContext";

const OrderDetailsContainer = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const {
    orders,
    loading: ordersLoading,
    error: ordersError,
    fetchOrders,
    getOrderById,
  } = useOrders();

  const [order, setOrder] = useState(null);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [orderNotFound, setOrderNotFound] = useState(false);

  /*
   * ============================================================
   * FETCH DATA
   * ============================================================
   *
   * /orders
   *     → fetchOrders()
   *
   * /orders/:orderId
   *     → getOrderById(orderId)
   */
  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      /*
       * ========================================================
       * INDIVIDUAL ORDER
       * ========================================================
       */
      if (orderId) {
        setOrderLoading(true);
        setOrderError("");
        setOrderNotFound(false);
        setOrder(null);

        const result = await getOrderById(orderId);

        /*
         * Component may have unmounted while the request
         * was running.
         */
        if (cancelled) {
          return;
        }

        /*
         * 404
         */
        if (result?.notFound) {
          setOrderNotFound(true);
          setOrderLoading(false);
          return;
        }

        /*
         * Other API error
         */
        if (result?.error) {
          setOrderError(result.error);
          setOrderLoading(false);
          return;
        }

        /*
         * Successful API response
         */
        if (result?.order) {
          setOrder(result.order);
        } else {
          setOrderNotFound(true);
        }

        setOrderLoading(false);

        return;
      }

      /*
       * ========================================================
       * MY ORDERS
       * ========================================================
       */
      await fetchOrders();
    };

    loadData();

    return () => {
      cancelled = true;
    };
  }, [orderId, fetchOrders, getOrderById]);

  /*
   * ============================================================
   * FORMAT DATE
   * ============================================================
   */
  const formatOrderDate = (date) => {
    if (!date) {
      return "N/A";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "N/A";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  /*
   * ============================================================
   * INDIVIDUAL ORDER LOADING
   * ============================================================
   */
  if (orderId && orderLoading) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E7D8CA] border-t-[#C97A34]" />

            <h1 className="mt-6 text-2xl font-bold text-[#2E1E13]">
              Loading Order...
            </h1>

            <p className="mt-2 text-[#6A5B4E]">
              Please wait while we load your order details.
            </p>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * ORDER NOT FOUND
   * ============================================================
   */
  if (orderId && orderNotFound) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[#2E1E13]">
              Order Not Found
            </h1>

            <p className="mt-3 text-[#6A5B4E]">We couldn't find this order.</p>

            <button
              type="button"
              onClick={() => navigate("/orders")}
              className="mt-8 cursor-pointer rounded-full bg-[#C97A34] px-8 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
            >
              Back to My Orders
            </button>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * ORDER DETAIL ERROR
   * ============================================================
   */
  if (orderId && orderError) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[#2E1E13]">
              Unable to Load Order
            </h1>

            <p className="mt-3 text-[#6A5B4E]">{orderError}</p>

            <button
              type="button"
              onClick={() => navigate("/orders")}
              className="mt-8 cursor-pointer rounded-full bg-[#C97A34] px-8 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
            >
              Back to My Orders
            </button>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * INDIVIDUAL ORDER PAGE
   * ============================================================
   */
  if (orderId && order) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] py-16">
          <div className="mx-auto max-w-7xl px-6">
            {/* Header */}
            <div>
              <button
                type="button"
                onClick={() => navigate("/orders")}
                className="mb-5 cursor-pointer text-sm font-medium text-[#C97A34] hover:underline"
              >
                ← Back to My Orders
              </button>

              <h1 className="text-4xl font-bold text-[#2E1E13]">
                Track Your Order
              </h1>

              <div className="mt-2 flex flex-col gap-1 text-[#6A5B4E] sm:flex-row sm:gap-4">
                <p>
                  Order ID:{" "}
                  <span className="font-semibold text-[#C97A34]">
                    #{order.order_number}
                  </span>
                </p>

                <p>
                  Order Date:{" "}
                  <span className="font-semibold">
                    {formatOrderDate(order.created_at)}
                  </span>
                </p>
              </div>
            </div>

            {/* Tracking + Summary */}
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {/* Tracking */}
              <div className="lg:col-span-2">
                <OrderTracking status={order.status} />
              </div>

              {/* Order Summary */}
              <OrderSummaryCard order={order} />
            </div>

            {/* Delivery Address */}
            <DeliveryAddress order={order} />
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * MY ORDERS LOADING
   * ============================================================
   */
  if (ordersLoading) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#E7D8CA] border-t-[#C97A34]" />

            <h1 className="mt-6 text-2xl font-bold text-[#2E1E13]">
              Loading Orders...
            </h1>

            <p className="mt-2 text-[#6A5B4E]">
              Please wait while we load your orders.
            </p>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * MY ORDERS ERROR
   * ============================================================
   */
  if (ordersError) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[#2E1E13]">
              Unable to Load Orders
            </h1>

            <p className="mt-3 text-[#6A5B4E]">{ordersError}</p>

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="mt-8 cursor-pointer rounded-full bg-[#C97A34] px-8 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
            >
              Continue Shopping
            </button>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * EMPTY ORDERS
   * ============================================================
   */
  if (orders.length === 0) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#F8F2EA] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[#2E1E13]">
              You have no orders yet
            </h1>

            <p className="mt-3 text-[#6A5B4E]">
              Your placed orders will appear here.
            </p>

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="mt-8 cursor-pointer rounded-full bg-[#C97A34] px-8 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
            >
              Continue Shopping
            </button>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * MY ORDERS PAGE
   * ============================================================
   */
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#F8F2EA] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Page Header */}
          <h1 className="text-4xl font-bold text-[#2E1E13]">My Orders</h1>

          <p className="mt-2 text-[#6A5B4E]">
            View and track your recent orders.
          </p>

          {/* Orders */}
          <div className="mt-8 space-y-6">
            {orders.map((order) => {
              const firstItem = order.items?.[0];

              return (
                <div
                  key={order.id}
                  className="rounded-3xl bg-white p-6 shadow-lg"
                >
                  {/* Order Header */}
                  <div className="flex flex-col justify-between gap-4 border-b border-[#E9DED2] pb-5 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-sm text-gray-500">Order ID</p>

                      <p className="mt-1 font-bold text-[#C97A34]">
                        #{order.order_number}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Order Date</p>

                      <p className="mt-1 font-medium text-[#2E1E13]">
                        {formatOrderDate(order.created_at)}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-[#FFF4E8] px-4 py-2 text-sm font-semibold capitalize text-[#C97A34]">
                      {order.status}
                    </span>
                  </div>

                  {/* First Product */}
                  {firstItem && (
                    <div className="mt-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-[#2E1E13]">
                            {firstItem.product_name}
                          </p>

                          <p className="mt-1 text-sm text-[#6A5B4E]">
                            {firstItem.variant_weight} × {firstItem.quantity}
                          </p>
                        </div>

                        <p className="font-semibold text-[#2E1E13]">
                          ₹{firstItem.subtotal}
                        </p>
                      </div>

                      {order.items?.length > 1 && (
                        <p className="mt-3 text-sm text-[#6A5B4E]">
                          + {order.items.length - 1} more{" "}
                          {order.items.length - 1 === 1 ? "item" : "items"}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Bottom */}
                  <div className="mt-6 flex flex-col gap-4 border-t border-[#E9DED2] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-[#6A5B4E]">Total Amount</p>

                      <p className="text-xl font-bold text-[#2E1E13]">
                        ₹{order.total}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <span className="text-sm">
                        Payment:{" "}
                        <span className="font-semibold capitalize text-[#2E1E13]">
                          {order.payment_status}
                        </span>
                      </span>

                      <button
                        type="button"
                        onClick={() => navigate(`/orders/${order.id}`)}
                        className="cursor-pointer rounded-full bg-[#C97A34] px-7 py-3 font-semibold text-white transition hover:bg-[#B66E2F]"
                      >
                        Track Order
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OrderDetailsContainer;
