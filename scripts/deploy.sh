#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# deploy.sh  –  Post-receive / GitHub webhook deployment script
#
# Called automatically after git push (via Plesk webhook or cron).
#
# One-time server setup:
#   1. Install PM2:             npm install -g pm2
#   2. Make executable:         chmod +x scripts/deploy.sh
#   3. Set API key in env:      edit ecosystem.config.js → BW_API_KEY
#   4. First start:             pm2 start ecosystem.config.js && pm2 save
#   5. Enable auto-start:       pm2 startup   (run the printed command)
#   6. Add nginx config:        config/nginx-api.conf → reload nginx
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

REPO_DIR="${REPO_DIR:-/var/www/vhosts/b-wirtschaften.de/httpdocs}"
LOG_DIR="/var/log/bw-api"

echo "[deploy] $(date -u +%Y-%m-%dT%H:%M:%SZ)"
cd "$REPO_DIR"
git pull origin main --ff-only

mkdir -p "$LOG_DIR"

if pm2 describe bw-api > /dev/null 2>&1; then
  pm2 restart bw-api
  echo "[deploy] bw-api restarted"
else
  pm2 start ecosystem.config.js
  pm2 save
  echo "[deploy] bw-api started (first run)"
fi

echo "[deploy] done."
