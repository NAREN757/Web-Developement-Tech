import { defineConfig } from "vite";

export default defineConfig({
  configFile: false,
  build: {
    outDir: "public/build",
    emptyOutDir: false,
    lib: {
      entry: "./client/tomtom-map.js",
      formats: ["es"],
      fileName: () => "tomtom-map.js",
      cssFileName: "tomtom-map",
    },
  },
});
