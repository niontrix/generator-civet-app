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
    civetRollupPlugin({
      emitDeclaration: true,
      ts: 'preserve',
    }),
  ],
};
