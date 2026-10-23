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
# `startOrReload` reloads a running app from PM2's *saved* definition rather
# than re-reading this file, so a stale definition survives every deploy. One
# such definition ran `next start 3000`, which Next reads as a project
# directory and not a port ("Invalid project directory ... /3000") — it
# crash-looped and served nginx a 502 while PM2 still reported "online".
# Deleting first forces the ecosystem file to be the single source of truth.
pm2 delete qlip-web >/dev/null 2>&1 || true
pm2 start ecosystem.config.cjs

# Persist, or the PM2 daemon resurrects the previous definition on reboot.
pm2 save >/dev/null

echo "==> [qlip-web] Successfully deployed! Process status:"
pm2 status qlip-web
