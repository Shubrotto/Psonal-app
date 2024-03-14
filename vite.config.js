import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/psonal-app-portfolio/",
  plugins: [react()],
  build: {
    OutDir: " build",
  },
});
