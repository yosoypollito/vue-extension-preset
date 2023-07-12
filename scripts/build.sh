cp ./manifest.json ./dist/manifest.json;

echo "Building extension...";

echo "Building scripts";
npm run build:scripts;

echo "Building ui";
npm run build:ui;

echo "Extension Builded"
