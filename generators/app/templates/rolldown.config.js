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
    civetRolldownPlugin({
      ts: "preserve"
    })
  ]
});