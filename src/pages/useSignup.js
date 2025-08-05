import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { signupUser } from "../services/apiSignup";
import { useNavigate } from "react-router-dom";
export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("Signup successful");
      navigate("/dashboard");
    },
    onError: (err) => {
      if (err.response?.status === 403) {
        toast.error(err.response.data?.message);
      } else {
        toast.error("Signup failed.");
      }
    },
  });
};
