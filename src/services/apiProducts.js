import axiosInstance from "./axiosInstance";

//done fixing
export const addProduct = async (product) => {
  const { data } = await axiosInstance.post("/api/products", product);
  return data;
};

//done fixing
export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get("api/products");
    return data.products;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};

//done fixing
export const deleteProduct = async (product) => {
  const { data } = await axiosInstance.delete(`/api/products/${product.id}`);
  return data;
};

//done fixing
export const softDeleteProduct = async (id) => {
  const { data } = await axiosInstance.patch(`/api/products/${id}/soft-delete`);
  return data;
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
