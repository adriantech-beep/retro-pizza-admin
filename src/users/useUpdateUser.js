import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/apiUsers";
import { toast } from "react-toastify";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("User updated successfully.");
    },
    onError: () => {
      toast.error("Failed to update user.");
    },
  });
};
