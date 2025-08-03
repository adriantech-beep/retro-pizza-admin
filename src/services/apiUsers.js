import axiosInstance from "./axiosInstance";

export const getUsers = async () => {
  const { data } = await axiosInstance.get("/api/users");

  const transformedUsers = data.users.map((user) => ({
    ...user,
    id: user._id,
  }));
  return transformedUsers;
};

export const deleteUserAPI = async (user) => {
  const { data } = await axiosInstance.delete(`/api/users/${user.id}`);
  return data;
};

export const updateUser = async ({ id, user }) => {
  const { data } = await axiosInstance.patch(`/api/users/${id}`, user);
  return data;
};
