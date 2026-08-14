import civetVitePlugin from '@danielx/civet/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.civet',
      fileName: 'main',
      formats: ['cjs', 'es'],
    },
  },
  sourcemap: true,
  plugins: [
    civetVitePlugin({
      // 'preserve' is used here, because otherwise debugging with source maps currently isn't working.
      // If you want all the language features of Civet, use 'tsc' instead. Downside: no debugging.
      ts: 'preserve',
      emitDeclaration: true,
      typecheck: true,
    })
  ],
});
