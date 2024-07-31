import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://tap-seva-digital-e-gram-panchayat-api.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
