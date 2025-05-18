#!/usr/bin/env bash
set -o errexit  # Exit on errors

npm install
# npm run build # Uncomment if you have a build step
npx puppeteer install

# Puppeteer cache management
if [[ ! -d $PUPPETEER_CACHE_DIR ]]; then
  echo "...Copying Puppeteer Cache from Build Cache"
  cp -R $XDG_CACHE_HOME/puppeteer/ $PUPPETEER_CACHE_DIR || echo "No Puppeteer cache found to copy."
else
  echo "...Storing Puppeteer Cache in Build Cache"
  cp -R $PUPPETEER_CACHE_DIR $XDG_CACHE_HOME
fi
