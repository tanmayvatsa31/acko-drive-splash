#!/usr/bin/env node
/**
 * Fresh local setup: install deps, build, start dev server on port 5173.
 */
import { spawnSync, spawn } from "node:child_process";
import { rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const isWin = process.platform === "win32";

function run(args, opts = {}) {
  const result = spawnSync(npm, args, {
    cwd: root,
    stdio: "inherit",
    shell: isWin,
    ...opts,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("\n[1/4] Cleaning build caches…");
try {
  rmSync(join(root, "dist"), { recursive: true, force: true });
  rmSync(join(root, "node_modules", ".vite"), { recursive: true, force: true });
} catch {
  /* ignore */
}

console.log("\n[2/4] Installing dependencies…");
run(["install"]);

console.log("\n[3/4] Production build check…");
run(["run", "build"]);

console.log("\n[4/4] Starting dev server (keep this terminal open)…\n");
const dev = spawn(npm, ["run", "dev"], {
  cwd: root,
  stdio: "inherit",
  shell: isWin,
});

process.on("SIGINT", () => {
  dev.kill("SIGTERM");
  process.exit(0);
});

dev.on("exit", (code) => process.exit(code ?? 0));
