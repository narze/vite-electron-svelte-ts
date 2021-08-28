import * as path from "path"
import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import autoExternal from "rollup-plugin-auto-external"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // lib: {
  //   entry: path.resolve(__dirname, "./index.ts"),
  //   name: "main",
  //   formats: ["cjs"],
  // },
  // rollupOptions: {
  //   plugins: [
  //     autoExternal({ packagePath: path.resolve(__dirname, "./package.json") }),
  //   ],
  // },

  server: {
    strictPort: true,
    port: 8000,
  },
})
