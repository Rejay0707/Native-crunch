const BASE_URL = "https://softlancex.com/native-crunch/backend/public/api";

export const createCheckout = async (checkoutData, token) => {
  const response = await fetch(`${BASE_URL}/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(checkoutData),
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(
      result.message || "Checkout failed. Please try again.",
    );

    error.status = response.status;
    error.data = result;

    throw error;
  }

  return result;
};
