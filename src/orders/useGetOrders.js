import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/apiOrders";

export const useGetOrders = () => {
  const { data: orders, isLoading } = useQuery({
    queryFn: getOrders,
    queryKey: ["orders"],
  });

  return { orders, isLoading };
};
