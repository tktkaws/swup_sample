// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        page2: resolve(__dirname, "page-2.html"),
        page3: resolve(__dirname, "page-3.html"),
        page4: resolve(__dirname, "page-4.html"),
      },
    },
  },
});
