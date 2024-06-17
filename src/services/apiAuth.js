import { server_path } from "../utils/utils";

export async function login(credentials) {
  const res = await fetch(server_path + "/api/v1/users/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (res.ok) return res.json();

  const data = await res.json();
  throw new Error(data.message);
}

export async function logout() {
  const res = await fetch(server_path + "/api/v1/users/logout", {
    method: "GET",
    credentials: "include",
  });

  if (res.ok) return res.json();

  const data = await res.json();
  throw new Error(data.message);
}

export async function signup({ name, email, username, password, passwordConfirm }) {
  const res = await fetch(server_path + "/api/v1/users/signup", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    // credentials: "include",
    body: JSON.stringify({ name, email, username, password, passwordConfirm }),
  });

  if (res.ok) return res.json();

  const data = await res.json();
  throw new Error(data.message);
}
