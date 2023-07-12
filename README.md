# Vue.js TypeScript Extension Preset

### Technologies
- Vue.js
- TypeScript
- Vitest
- Cypress

This preset allows you to create a Chrome/Edge/Chromium extension using TypeScript and Vue.js for the UI

### Explanation
Keep in mind this preset works compiling your changes from typescript to javascript and using the javascript in the browser extension.

That means that folder which contains the compiled typescript `dist/` is the folder you are going to `load as unpacked` extension.

## Usage
First clone this repo and install Dependencies 
```bash
npm install
```

### Development Command

```bash
npm run dev:extension
```
This command is going to run `scripts/dev.sh`.
You can go check and see what it does

Note: This command dont run the tests

### Build command

```bash
npm run build:extension
```
This command is going to run `scripts/build.sh`

You can go check and see what it does

Note: This command run the tests

### Other commands

```bash
build:ui # builds the vue.js app using the normal vue proyect command
build:ui:watch # builds and watch the changes of the vue.js app
build:scripts # build the scripts of the extension and copy the manifest.json file to dist

build:extension # build and execute all the test of the extension (production command)

dev:ui # runs the vue.js app normal vue proyect development command

dev:scripts # compile and keeps watching changes of extension scripts

dev:extension # Runs the needed command to compile and watch for changes in Extension scripts and Vue.js App
```

### Notes

This preset uses `workspaces` for handle the Vue.js App `deps` and Extension scripts `deps` in same folder.