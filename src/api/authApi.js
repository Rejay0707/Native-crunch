import axios from "axios";

const BASE_URL = "https://softlancex.com/native-crunch/backend/public/api";

export const registerUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/register`, userData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await axios.post(
    `${BASE_URL}/forgot-password`,
    {
      email,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
  );

  return response.data;
};

export const verifyResetOtp = async (userData) => {
  const response = await axios.post(
    `${BASE_URL}/verify-reset-otp`,
    userData,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return response.data;
};

export const resetPassword = async (userData) => {
  const response = await axios.post(`${BASE_URL}/reset-password`, userData);

  return response.data;
};

