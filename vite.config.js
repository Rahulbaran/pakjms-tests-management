import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import lightningcss from "vite-plugin-lightningcss";

export default defineConfig({
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
