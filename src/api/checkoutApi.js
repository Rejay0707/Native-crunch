const BASE_URL =
  "https://softlancex.com/native-crunch/backend/public/api";

export const createCheckout = async (checkoutData, token) => {
  const response = await fetch(`${BASE_URL}/checkout`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(checkoutData),
  });

  // Read response as text first
  const rawResponse = await response.text();

  console.log("Checkout HTTP status:", response.status);
  console.log("Checkout response:", rawResponse);

  let result;

  try {
    result = JSON.parse(rawResponse);
  } catch {
    console.error("Backend did NOT return JSON.");
    console.error("Raw backend response:", rawResponse);

    throw new Error(
      `Server returned an invalid response (HTTP ${response.status}).`
    );
  }

  if (!response.ok) {
    const error = new Error(
      result.message || "Checkout failed. Please try again."
    );

    error.status = response.status;
    error.data = result;

    throw error;
  }

  return result;
};