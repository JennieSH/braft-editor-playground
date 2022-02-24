import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/braft-editor-playground/" : "/",
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/const": path.resolve(__dirname, "./src/const"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/hooks": path.resolve(__dirname, "./src/hooks")
    }
  },
  define: {
    global: "window"
  }
}));
