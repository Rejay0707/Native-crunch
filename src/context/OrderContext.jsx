/* eslint-disable react-refresh/only-export-components */

import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getOrders as getOrdersApi,
  getOrderById as getOrderByIdApi,
} from "../api/orderApi";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /*
   * ============================================================
   * GET CUSTOMER TOKEN
   * ============================================================
   */
  const getToken = () => {
    return localStorage.getItem("token");
  };

  /*
   * ============================================================
   * HANDLE 401 UNAUTHORIZED
   * ============================================================
   */
  const handleUnauthorized = useCallback(() => {
    console.log("Order API: Unauthorized");
    localStorage.removeItem("token");

    setOrders([]);
    setError("Your session has expired. Please login again.");

    navigate("/login", { replace: true });
  }, [navigate]);

  /*
   * ============================================================
   * GET ALL CUSTOMER ORDERS
   * ============================================================
   *
   * GET /orders
   */
  const fetchOrders = useCallback(async () => {
    const token = getToken();
    console.log("Order API: fetchOrders() called"); console.log("Order API: token available:", !!token);

    if (!token) {
      console.log("Order API: No token found");
      setOrders([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("Order API: Calling GET /orders");
      const result = await getOrdersApi(token);
      console.log("Order API: GET /orders response:", result);

      setOrders(Array.isArray(result?.orders) ? result.orders : []);
    } catch (err) {
      console.error("Fetch orders error:", err);

      if (err.status === 401) {
        handleUnauthorized();
        return;
      }

      setError(err.message || "Unable to load your orders.");

      setOrders([]);
    } finally {
      setLoading(false);
    }
  }, [handleUnauthorized]);

  /*
   * ============================================================
   * GET SINGLE ORDER
   * ============================================================
   *
   * GET /orders/{orderId}
   */
  const getOrderById = useCallback(
    async (orderId) => {
      const token = getToken();

      if (!token) {
        handleUnauthorized();

        return {
          notFound: false,
          order: null,
        };
      }

      /*
       * Convert route parameter to numeric ID.
       *
       * Example:
       * "7" → 7
       */
      const numericOrderId = Number(orderId);

      /*
       * Reject invalid IDs before calling the API.
       */
      if (!Number.isInteger(numericOrderId) || numericOrderId <= 0) {
        return {
          notFound: true,
          order: null,
        };
      }

      try {
        const result = await getOrderByIdApi(numericOrderId, token);

        return {
          notFound: false,
          order: result?.order || null,
        };
      } catch (err) {
        console.error("Fetch order details error:", err);

        /*
         * 401
         */
        if (err.status === 401) {
          handleUnauthorized();

          return {
            notFound: false,
            order: null,
          };
        }

        /*
         * 404
         *
         * This can mean:
         * - order doesn't exist
         * - order belongs to another customer
         *
         * We don't expose any order information.
         */
        if (err.status === 404) {
          return {
            notFound: true,
            order: null,
          };
        }

        /*
         * Other errors
         */
        return {
          notFound: false,
          order: null,
          error: err.message || "Unable to load order details.",
        };
      }
    },
    [handleUnauthorized],
  );

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        error,
        fetchOrders,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside an OrderProvider");
  }

  return context;
};
