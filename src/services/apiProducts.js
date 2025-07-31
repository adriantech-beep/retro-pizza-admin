import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "./axiosInstance";

export const addProduct = async (data) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/products`,
      data
    );
    return res.data;
  } catch (err) {
    if (err.response?.status === 422) {
      toast.error(err.response.data?.message || "Product already exists.");
    } else {
      toast.error("Something went wrong.");
    }
    throw err;
  }
};

export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get("api/products");
    return data.products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};

export const getTrashedProducts = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products/trashed`
    );
    const data = await res.json();
    return data.products || [];
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};

export const deleteProduct = async (product) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products/${product.id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) throw new Error("Failed to delete");
  } catch (err) {
    console.error("Error deleting:", err);
    toast.error("Error deleting the product");
  }
};

export const updateProduct = async ({ id, data }) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/${id}`,
    {
      method: "PATCH",
      body: data,
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update user");
  }

  return res.json();
};

export const softDeleteProduct = async (id) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/${id}/soft-delete`,
    {
      method: "PATCH",
    }
  );
  if (!res.ok) throw new Error("Failed to soft delete product");
};

export const restoreProduct = async (id) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/${id}/restore`,
    {
      method: "PATCH",
    }
  );
  if (!res.ok) throw new Error("Failed to restore product");

  return res.json();
};
