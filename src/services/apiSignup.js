import axiosInstance from "./axiosInstance";

export const signupUser = async (user) => {
  const { data } = await axiosInstance.post("/api/users/signup", user);

  return data;
};
