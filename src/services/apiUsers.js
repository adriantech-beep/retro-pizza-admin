export const getUsers = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_API_USER_URL);
    const data = await res.json();

    const transformedUsers = data.users.map((user) => ({
      ...user,
      id: user._id,
    }));

    return { users: transformedUsers };
  } catch (err) {
    console.error("Failed to fetch users:", err);
    return [];
  }
};

export const deleteUserAPI = async (user) => {
  const res = await fetch(`${import.meta.env.VITE_API_USER_URL}/${user.id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Delete failed");
};

export const updateUser = async ({ id, data }) => {
  const res = await fetch(`${import.meta.env.VITE_API_USER_URL}/${id}`, {
    method: "PATCH",
    body: data,
  });

  if (!res.ok) {
    throw new Error("Failed to update user");
  }

  return res.json();
};
