rm -rf dist
parcel build src/index.js --public-url ./
cp src/index.html dist/
cp src/manifest.json dist/