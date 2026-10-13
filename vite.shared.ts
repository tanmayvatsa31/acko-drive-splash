import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export const ackoResolveAlias = {
  "@acko/button": path.resolve(rootDir, "src/preview-stubs/button.tsx"),
  "@acko/typography": path.resolve(
    rootDir,
    "src/preview-stubs/typography.tsx",
  ),
};

export const viteRootDir = rootDir;
