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
      "@acko/button": path.resolve(rootDir, "src/acko/button.tsx"),
      "@acko/typography": path.resolve(rootDir, "src/acko/typography.tsx"),
      "@acko/tokens": path.resolve(rootDir, "src/acko/tokens.css"),
      "@acko/css": path.resolve(rootDir, "src/acko"),
    },
  },
  server: {
    host: true,
    port: 5174,
    open: "/?screen=loader",
    allowedHosts: true,
  },
});
