import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/apiPost";

export function useGetPosts() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return { posts, isLoading };
}
