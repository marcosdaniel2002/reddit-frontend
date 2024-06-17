import Post from "../../ui/Post";
import { useGetPosts } from "./useGetPosts";

function Discover() {
  const { posts, isLoading } = useGetPosts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-[650px]">
      {posts.map((post, i) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Discover;
