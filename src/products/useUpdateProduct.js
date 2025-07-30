import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateProduct } from "../services/apiProducts";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("Product updated successfully.");
    },
    onError: () => {
      toast.error("Failed to update product.");
    },
  });
};
