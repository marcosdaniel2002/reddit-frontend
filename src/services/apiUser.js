import { server_path } from "../utils/utils";

export async function getCurrentUser() {
  const res = await fetch(server_path + "/api/v1/users/getSession", {
    method: "GET",
    credentials: "include",
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }

  const data = await res.json();
  throw new Error(data.message);
}

export async function updateCurrentUser(form) {
  const res = await fetch(server_path + "/api/v1/users/updateMe", {
    method: "PATCH",
    // headers: {
    //   "Content-Type":
    //     "multipart/form-data; boundary=<calculated when request is sent>",
    // },
    credentials: "include",
    body: form,
  });

  if (res.ok) return res.json();

  const data = await res.json();
  throw new Error(data.message);
}

export async function updateCurrentUserPassword({
  password,
  newPassword,
  newPasswordConfirm,
}) {
  console.log({ password, newPassword, newPasswordConfirm });
  const res = await fetch(server_path + "/api/v1/users/updateMyPassword", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ password, newPassword, newPasswordConfirm }),
  });

  if (res.ok) return res.json();

  const data = await res.json();
  throw new Error(data.message);
}
