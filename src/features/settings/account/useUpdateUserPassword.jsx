import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUserPassword as updateCurrentUserPasswordApi } from "../../../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();
  const { mutate: updateCurrentUserPassword, isLoading } = useMutation({
    mutationFn: (form) => updateCurrentUserPasswordApi(form),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data);
      toast.success("Successfully update");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return {
    updateCurrentUserPassword,
    isLoading,
  };
} // Path: client/src/services/apiUser.js
