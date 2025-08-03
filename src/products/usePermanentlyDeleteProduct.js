// useDeleteProduct.js
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { deleteProduct } from "../services/apiProducts";
import { useNavigate } from "react-router-dom";

export const usePermanentlyDeleteProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/products");
      toast.success("Product permanently deleted");
    },
    onError: () => {
      toast.error("Failed to delete product");
    },
  });
};
