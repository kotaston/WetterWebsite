#!/usr/bin/env bash
# render-build.sh

# Beende das Skript sofort, wenn ein Fehler auftritt
set -o errexit

echo "==> Starte npm install..."
npm install

# Optional: andere Build-Schritte (z.B. npm run build), falls du sie brauchst
# npm run build

# Puppeteer-Cache-Verzeichnis
PUPPETEER_CACHE_PATH="$PUPPETEER_CACHE_DIR"

# Puppeteer-Cache speichern oder laden
if [[ -d "$XDG_CACHE_HOME/puppeteer" ]]; then
  echo "==> Kopiere Puppeteer-Cache in $PUPPETEER_CACHE_PATH"
  mkdir -p "$PUPPETEER_CACHE_PATH"
  cp -r "$XDG_CACHE_HOME/puppeteer/." "$PUPPETEER_CACHE_PATH"
else
  echo "==> Kein Puppeteer-Cache gefunden. Wird beim ersten Start installiert."
fi
