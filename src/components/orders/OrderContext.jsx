/* eslint-disable react-refresh/only-export-components */

import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

import {
  getOrders as getOrdersApi,
  getOrderById as getOrderByIdApi,
} from "../api/orderApi";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUnauthorized = useCallback(() => {
    setOrders([]);
    setError("Your session has expired. Please login again.");
    navigate("/login", { replace: true });
  }, [navigate]);

  const fetchOrders = useCallback(async () => {
    if (!token) {
      setOrders([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await getOrdersApi(token);

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
  }, [token, handleUnauthorized]);

  const getOrderById = useCallback(
    async (orderId) => {
      if (!token) {
        handleUnauthorized();

        return {
          notFound: false,
          order: null,
        };
      }

      const numericOrderId = Number(orderId);

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

        if (err.status === 401) {
          handleUnauthorized();

          return {
            notFound: false,
            order: null,
          };
        }

        if (err.status === 404) {
          return {
            notFound: true,
            order: null,
          };
        }

        return {
          notFound: false,
          order: null,
          error: err.message || "Unable to load order details.",
        };
      }
    },
    [token, handleUnauthorized],
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
