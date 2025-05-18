#!/usr/bin/env bash
set -o errexit

npm install
# npm run build # <-- uncomment if your project requires building

# Store/pull Puppeteer cache with build cache
if [[ ! -d $PUPPETEER_CACHE_DIR ]]; then 
  echo "...Copying Puppeteer Cache from Build Cache" 
  if [[ -d $XDG_CACHE_HOME/puppeteer/ ]]; then
    cp -R $XDG_CACHE_HOME/puppeteer/ $PUPPETEER_CACHE_DIR
  else
    echo "Kein Puppeteer-Cache gefunden, überspringe Kopiervorgang"
  fi
