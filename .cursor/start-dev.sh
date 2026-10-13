#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required. Install Node 20+ and rerun."
  exit 1
fi

if [[ ! -d node_modules ]]; then
  npm install --registry https://registry.npmjs.org
fi

echo "Starting ACKO Drive dev server on http://0.0.0.0:5173"
exec npm run dev -- --host 0.0.0.0 --port 5173
