import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/apiUsers";

export const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryFn: getUsers,
    queryKey: ["users"],
  });

  return { data, isLoading };
};
