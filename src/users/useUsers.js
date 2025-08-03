import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/apiUsers";

export const useUsers = () => {
  const { data: users, isLoading } = useQuery({
    queryFn: getUsers,
    queryKey: ["admin"],
  });

  return { users, isLoading };
};
