import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/users/login`,
    data
  );

  localStorage.setItem("adminToken", res.data.token);

  return res.data;
};
