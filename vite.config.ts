import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      i18next: path.resolve(__dirname, "src/lib/i18next.ts"),
      "react-i18next": path.resolve(__dirname, "src/lib/react-i18next.tsx"),
    },
  },
});
