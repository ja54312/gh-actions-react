import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/" para dominios personales
  base: "https://ja54312.github.io/gh-actions-react/",
  plugins: [react()],
});
