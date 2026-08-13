import civetVitePlugin from '@danielx/civet/vite';
import { defineConfig } from 'vite';

// for more options, see https://github.com/DanielXMoore/Civet/tree/main/source/unplugin#options
const civet = civetVitePlugin({
  ts: 'preserve'
});

export default defineConfig({
  plugins: [civet],
  sourcemap: true,
  worker: {
    plugins: () => [civet]
  }
});
