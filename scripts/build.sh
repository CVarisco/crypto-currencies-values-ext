rm -rf dist
parcel build src/index.js
cp src/index.html dist/
cp src/manifest.json dist/