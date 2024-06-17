import { server_path } from "../utils/utils";

export async function getAllPosts() {
  const res = await fetch(server_path + "/api/v1/posts", {
    method: "GET",
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }

  const data = await res.json();
  throw new Error(data.message);
}

export async function createPost(form) {
  const res = await fetch(server_path + "/api/v1/posts", {
    method: "POST",
    credentials: "include",
    body: form,
  });

  if (res.ok) return res.json();

  const data = await res.json();
  throw new Error(data.message);
}
