import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (credentials) => loginApi(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data);
      navigate("/", { replace: true });
      toast.success("Successfully login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
