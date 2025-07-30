import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/apiLogin";
export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/dashboard");
    },
    onError: (err) => {
      if (err.response?.status === 403) {
        toast.error(
          err.response.data?.message || "Invalid username or password"
        );
      } else {
        toast.error("Login failed.");
      }
    },
  });
};
