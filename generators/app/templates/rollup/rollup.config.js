import civetRollupPlugin from '@danielx/civet/rollup';

export default {
  input: {
    main:'src/main.civet'
  },
  output: {
    dir: 'dist',
    format: 'cjs',
    entryFileNames: '[name].cjs',
    sourcemap: true,
  },
  plugins: [
    // for more options, see https://github.com/DanielXMoore/Civet/tree/main/source/unplugin#options
    civetRollupPlugin({
      emitDeclaration: true,
      declarationExtension: '.d.ts',
      ts: 'preserve',
    }),
  ],
};
