import { useQuery } from "@tanstack/react-query";
import { getTrashedProducts } from "../services/apiProducts";

export const useGetTrashedProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryFn: getTrashedProducts,
    queryKey: ["products"],
  });

  return { products, isLoading };
};
