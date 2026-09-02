import axios from "axios";


const BASE_URL =
  "https://nativecrunch.com/backend/api";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  return result.data;
};

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await response.json();

  return result.data;
};