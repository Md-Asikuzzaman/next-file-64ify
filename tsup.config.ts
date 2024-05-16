import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  treeshake: true,
  minify: true,
  clean: true,
  dts: true,
  splitting: false,
  format: ["esm"],
  injectStyle: false,
});
