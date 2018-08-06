#!/bin/bash

echo "=== Build vue"
cd ~/enonic/apps/xp-part-with-vue-example/src-client/

case $1 in
  dev)
    npm run dev
    ;;
  *)
    npm run build
    ;;
esac
cd ../src/main/resources/assets/

echo "=== Remove old symlinks"

rm app.js
rm app.*.js.map
rm app.css
rm chunk-vendors.js
rm chunk-vendors.*.js.map

echo "=== create new symlinks"

case $1 in
  dev)
    ln -s client/app.js app.js
    ;;
  *)
    ln -s client/js/app.*.js app.js
    ln -s client/js/app.*.js.map
    ln -s client/js/chunk-vendors.*.js chunk-vendors.js
    ln -s client/js/chunk-vendors.*.js.map
    ln -s client/css/app.*.css app.css
    ls -laF
    ;;
esac


echo "=== build and deploy enonic app"
echo "=== XP_HOME=$XP_HOME"
cd ~/enonic/apps/xp-part-with-vue-example/
./gradlew deploy
