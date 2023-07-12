echo "Running development commands";
concurrently -c "green,blue" --names "Vue.js VITE,Scripts TS" "npm run build:ui:watch" "npm run dev:scripts"