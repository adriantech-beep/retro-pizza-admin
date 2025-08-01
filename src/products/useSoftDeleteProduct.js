// useDeleteProduct.js
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { softDeleteProduct } from "../services/apiProducts";
import { useNavigate } from "react-router-dom";

export const useSoftDeleteProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: softDeleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/products");
      toast.success("Product softly deleted");
    },
    onError: () => {
      toast.error("Failed to softly delete product");
    },
  });
};
