import { defineConfig } from "rolldown";
import civetRolldownPlugin from "@danielx/civet/rolldown";

export default defineConfig({
  input: "src/main.civet",
  output: {
    dir: "dist",
    format: "esm",
    entryFileNames: "main.js",
    sourcemap: true
  },
  plugins: [
    // for more options, see https://github.com/DanielXMoore/Civet/tree/main/source/unplugin#options
    civetRolldownPlugin({
      emitDeclaration: true,
      declarationExtension: ".d.ts",
      ts: "preserve"
    })
  ]
});
