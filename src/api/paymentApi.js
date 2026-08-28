const BASE_URL = "https://softlancex.com/native-crunch/backend/public/api";

export const initiatePayment = async (orderId, token) => {
  const response = await fetch(`${BASE_URL}/payments/${orderId}/initiate`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result.message || "Payment initiation failed.");

    error.status = response.status;
    error.data = result;

    throw error;
  }

  return result;
};

export const getPaymentStatus = async (orderNumber, token) => {
  const response = await fetch(`${BASE_URL}/payments/status/${orderNumber}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(
      result.message || "Unable to check payment status.",
    );

    error.status = response.status;
    error.data = result;

    throw error;
  }

  return result;
};
