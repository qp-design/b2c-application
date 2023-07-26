import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'qj-b2c-api',
      file: 'dist/index.js',
    }
  ],
  external: ['@brushes/optimize'],
  plugins: [
    ts({}),
    terser(),
  ]
};
