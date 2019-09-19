#!/bin/bash

cd build
# rename new build
JSSHA=`sha256sum bundle.js | cut -c1-8`
mv bundle.js "bundle.${JSSHA}.js"
mv bundle.js.map "bundle.${JSSHA}.js.map"

CSSSHA=`sha256sum bundle.css | cut -c1-8`
mv bundle.css "bundle.${CSSSHA}.css"
mv bundle.css.map "bundle.${CSSSHA}.css.map"

# change index.html references
sed -i "s/bundle.js/bundle.${JSSHA}.js/g" index.html
sed -i "s/bundle.css/bundle.${CSSSHA}.css/g" index.html

# list=`ls | grep -E "bundle."`
# while read -r filename; do
#   hash=`sha256sum ${filename} | cut -c1-8`
#   sed "s/bundle\(.*\)/mv & bundle.${hash}\1/" | sh
# done <<< "$list"
