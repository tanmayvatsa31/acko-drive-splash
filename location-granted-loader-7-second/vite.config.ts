import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@acko/typography": path.resolve(
        rootDir,
        "src/preview-stubs/typography.tsx",
      ),
    },
  },
  server: {
    host: true,
    port: 5173,
    open: "/",
  },
});
