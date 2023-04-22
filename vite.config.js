import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import lightningcss from "vite-plugin-lightningcss";
import { VitePWA } from "vite-plugin-pwa";

import manifest from "./manifest.json";

export default defineConfig({
  build: {
    emptyOutDir: true
  },
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    lightningcss({
      browserslist: [">0.25%", "not dead", "not op_mini all", "not IE 11"],
      drafts: {
        nesting: true
      },
      pseudoClasses: {
        focusVisible: "focus-visible"
      }
    }),
    VitePWA({
      manifest,
      manifestFilename: "site.webmanifest",
      includeAssets: ["robots.txt"],
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: [
          "/**/*.{css,html,js}",
          "/*.{ico,png,webp,gif,jpeg,avif}"
        ],
        sourcemap: true
      },
      registerType: "prompt"
    })
  ],

  server: {
    open: true
  },
  preview: {
    open: true,
    port: 5000
  }
});
