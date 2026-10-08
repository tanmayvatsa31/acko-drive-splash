#!/usr/bin/env node
/** Quick check before opening http://localhost:5173 in your browser. */
import { spawnSync } from "node:child_process";

const url = "http://127.0.0.1:5173/";
const res = spawnSync("curl", ["-s", "-o", "/dev/null", "-w", "%{http_code}", url], {
  encoding: "utf8",
});

const code = res.stdout?.trim() ?? "000";
if (code === "200") {
  console.log(`OK — dev server is running (${url})`);
  process.exit(0);
}

console.error(`
ERR_CONNECTION_REFUSED usually means nothing is listening on port 5173 on THIS machine.

Start the server first (keep the terminal open):

  cd ${process.cwd()}
  npm install
  npm run dev

Then open: ${url}

If you use a Cloud Agent, localhost in Safari/Chrome on your Mac is NOT the agent VM.
Use Cursor "Try Live" / Desktop and open ${url} inside that session, or run npm run dev locally.
`);
process.exit(1);
