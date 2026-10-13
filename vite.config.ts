import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ackoResolveAlias, viteRootDir } from "./vite.shared";

function logDevUrls(): Plugin {
  return {
    name: "log-dev-urls",
    configureServer(server) {
      server.httpServer?.once("listening", () => {
        const address = server.httpServer?.address();
        const port =
          typeof address === "object" && address !== null ? address.port : 5173;
        console.log("\n  ACKO Drive — Kia Seltos details (Figma 17346:15109)\n");
        console.log(`  → http://127.0.0.1:${port}/`);
        console.log(`  → http://localhost:${port}/`);
        console.log(`  → Splash preview: http://localhost:${port}/splash.html\n`);
        console.log("  Keep this terminal open while viewing in the browser.\n");
      });
    },
  };
}

export default defineConfig({
  base: process.env.PAGES_BASE ?? "/",
  plugins: [tailwindcss(), react(), logDevUrls()],
  resolve: {
    alias: ackoResolveAlias,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    open: false,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: false,
    open: "/",
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(viteRootDir, "index.html"),
        splash: path.resolve(viteRootDir, "splash.html"),
      },
    },
  },
});
