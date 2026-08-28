
const BASE_URL =
  "https://softlancex.com/native-crunch/backend/public/api";

/*
 * ============================================================
 * GET ALL CUSTOMER ORDERS
 * GET /orders
 * ============================================================
 */
export const getOrders = async (token) => {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(
      result.message || "Unable to fetch orders.",
    );

    error.status = response.status;
    error.data = result;

    throw error;
  }

  return result;
};

/*
 * ============================================================
 * GET SINGLE CUSTOMER ORDER
 * GET /orders/{orderId}
 * ============================================================
 */
export const getOrderById = async (orderId, token) => {
  const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(
      result.message || "Unable to fetch order details.",
    );

    error.status = response.status;
    error.data = result;

    throw error;
  }

  return result;
};
