import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteUserAPI } from "../services/apiUsers";
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("User deleted.");
    },
    onError: () => {
      toast.error("Failed to delete user.");
    },
  });
};
