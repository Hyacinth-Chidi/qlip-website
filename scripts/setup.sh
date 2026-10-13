#!/usr/bin/env bash
# One command to run after `git pull`: installs/updates node deps,
# builds Next.js production bundle, and starts or reloads under PM2
# without disturbing any other apps (e.g. qlip-api, docker containers).
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> [qlip-web] Installing dependencies"
npm install

echo "==> [qlip-web] Building Next.js production bundle"
npm run build

if ! command -v pm2 >/dev/null 2>&1; then
  echo "!! pm2 not found on PATH. Install it once with: sudo npm install -g pm2"
  exit 1
fi

echo "==> [qlip-web] Starting/reloading qlip-web under PM2"
pm2 startOrReload ecosystem.config.cjs

echo "==> [qlip-web] Successfully deployed! Process status:"
pm2 status qlip-web
