import axiosInstance from "./axiosInstance";

export const addProduct = async (product) => {
  const { data } = await axiosInstance.post("api/products", product);
  return data;
};

export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get("/api/products");
    return data.products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};

export const deleteProduct = async (id) => {
  const { data } = await axiosInstance.delete(`/api/products/${id}`);
  return data;
};

export const softDeleteProduct = async (id) => {
  const { data } = await axiosInstance.patch(`/api/products/${id}/soft-delete`);
  return data;
};

export const getTrashedProducts = async () => {
  const { data } = await axiosInstance.get("/api/products/trashed");
  return data.products;
};

export const updateProduct = async ({ id, product }) => {
  const { data } = await axiosInstance.patch(`/api/products/${id}`, product);
  return data;
};

export const restoreProduct = async (id) => {
  const { data } = await axiosInstance.patch(`/api/products/${id}/restore`);
  return data;
};
