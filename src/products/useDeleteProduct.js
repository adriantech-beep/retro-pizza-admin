// useDeleteProduct.js
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { deleteProduct } from "../services/apiProducts";
import { useNavigate } from "react-router-dom";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      navigate("/products");
      toast.success("Product deleted");
    },
    onError: () => {
      toast.error("Failed to delete product");
    },
  });
};
