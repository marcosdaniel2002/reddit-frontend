const ENV = import.meta.env.VITE_APP_ENV || "production";

export const server_path =
  ENV === "development"
    ? "http://127.0.0.1:5000"
    : "https://reddit-backend-orbp.onrender.com";

export function blockScreen(block) {
  if (block) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}
