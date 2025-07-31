import axiosInstance from "./axiosInstance";

export const loginUser = async (data) => {
  const res = await axiosInstance.post("/api/users/login", data);

  localStorage.setItem("adminToken", res.data.token);

  return res.data;
};
