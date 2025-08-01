import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../services/apiProducts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useAddProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("Product created");
      queryClient.invalidateQueries(["products"]);
      navigate("/products");
    },
    onError: (err) => {
      if (err.response?.status === 422) {
        toast.error(err.response.data?.message || "Product already exists.");
      } else {
        toast.error("Something went wrong.");
      }
    },
  });
};
