import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Psonal-app/",
  plugins: [react()],
  build: {
    OutDir: " build",
  },
});
