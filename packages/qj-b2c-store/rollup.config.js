import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'store-index',
      dir: 'dist',
    }
  ],
  cache: false,
  external: ['qj-b2c-api', '@brushes/utils', 'react/jsx-runtime', 'react', 'lodash-es', '@brushes/optimize', '@brushes/shared-utils'],
  plugins: [
    ts({}),
    terser(),
  ]
};
