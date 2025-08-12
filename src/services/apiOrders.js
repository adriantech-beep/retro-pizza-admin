import axiosInstance from "./axiosInstance";

export const getOrders = async () => {
  try {
    const { data } = await axiosInstance.get("/api/orders/get-orders");
    return data.orders;
  } catch (err) {
    console.error("Failed to fetch orders:", err);
    return [];
  }
};

export const updateOrder = async ({ id, order }) => {
  const { data } = await axiosInstance.patch(
    `/api/orders/update-order/${id}`,
    order
  );
  return data;
};
