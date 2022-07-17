import { defineConfig } from "tsup"

import pkgJson from "./package.json"

export default defineConfig({
  entryPoints: ["src/setup-node.ts", "src/cache-save.ts"],
  // tsup only bundles devDependencies by default, so we have to explicitly mark dependencies as not external
  noExternal: Object.keys(pkgJson.dependencies),

  esbuildOptions: (options) => {
    options.entryNames = "[name]/index"
  },

  minify: false,
  bundle: true,
  splitting: false,
  platform: "node",
  target: "node16",
  format: ["cjs"],

  clean: true,
})
