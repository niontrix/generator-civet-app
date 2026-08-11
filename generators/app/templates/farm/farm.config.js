import { defineConfig } from "@farmfe/core";
import civetFarmPlugin from "@danielx/civet/farm";

export default defineConfig({
  compilation: {
    input: {
      index: "./index.html",
    },

    output: {
      path: "./dist",
      format: "esm",
      targetEnv: "browser",
    },

    sourcemap: true,
    minify: false,
  },

  plugins: [
    // for more options, see https://github.com/DanielXMoore/Civet/tree/main/source/unplugin#options
    civetFarmPlugin({
      ts: "preserve",
    }),
  ]
});
