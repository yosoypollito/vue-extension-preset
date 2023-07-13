# Vue.js TypeScript Extension Preset

### Technologies
- Vue.js
- TypeScript
- Vitest
- Cypress

This preset allows you to create a Chrome/Edge/Chromium extension using TypeScript and Vue.js for the UI

You can use this preset for creating your own extension, but please leave a ⭐ to this repo if is useful 😀

### Explanation
Keep in mind this preset works by compiling your changes from typescript to javascript and then using the javascript in the browser extension.

The folder which contains the compiled typescript `dist/` is the folder you are going to `load as unpacked` this extension.

## Usage
First, clone this repo and install Dependencies.
```bash
npm install
```

### Development Command

```bash
npm run dev:extension
```
This command runs `scripts/dev.sh`.
> You can open the script to have a look at its functionality.

Note: This command does not execute unit testing.

### Build command

```bash
npm run build:extension
```
This command runs `scripts/build.sh`
> You can open the script to have a look at its functionality.

Note: This command executes testing.

### Other commands

```bash
build:ui # builds the vue.js app using the normal vue project command
build:ui:watch # builds and watches the changes of the vue.js app
build:scripts # builds the scripts of the extension and copies the manifest.json file to dist

build:extension # builds and execute all the tests of the extension (production command)

dev:ui # runs the vue.js app normal vue project development command

dev:scripts # compiles and begins watching for changes of extension scripts

dev:extension # Runs the needed command to compile and watch for changes in Extension scripts and Vue.js App
```

### Notes

This preset uses `workspaces` for handling the Vue.js App `deps` and Extension script's `deps`, in same folder.