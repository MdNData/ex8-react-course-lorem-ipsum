import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ex8-react-course-lorem-ipsum",
  plugins: [react()],
});
