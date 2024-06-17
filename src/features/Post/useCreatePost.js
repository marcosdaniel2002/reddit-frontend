import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { createPost as createPostApi } from "../../services/apiPost";

export function useCreatePost() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: (form) => createPostApi(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries("posts");
      toast.success("Post created successfully");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createPost, isLoading };
}
