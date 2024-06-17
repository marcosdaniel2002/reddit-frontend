import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: "./ssl/reddit-privateKey.key",
      cert: "./ssl/reddit.crt",
    },
  },
  plugins: [react()],
});
