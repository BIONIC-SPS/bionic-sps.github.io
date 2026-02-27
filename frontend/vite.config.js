import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],

  // IMPORTANT for GitHub Pages project sites:
  // - If baseurl is "/bionic-website", set base to "/bionic-website/"
  // - If baseurl is "" (org site), set base to "/"
  base: process.env.VITE_BASE ?? "/",

  build: {
    outDir: resolve(process.cwd(), "../assets/react"),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(process.cwd(), "src/main.jsx"),
      output: {
        entryFileNames: "main.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) return "main.css";
          return "[name][extname]";
        }
      }
    }
  }
});