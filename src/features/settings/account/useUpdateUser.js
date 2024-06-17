import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as updateCurrentUserApi } from "../../../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateCurrentUser, isLoading } = useMutation({
    mutationFn: (form) => updateCurrentUserApi(form),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data.user);
      toast.success("Successfully update");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateCurrentUser, isLoading };
}
