import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../services/apiOrders";
import { toast } from "react-toastify";

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOrder,
    onSuccess: () => {
      toast.success("Order updated successfully");
      //   navigate("/cart");
      queryClient.invalidateQueries(["orders"]);
    },
  });
};
