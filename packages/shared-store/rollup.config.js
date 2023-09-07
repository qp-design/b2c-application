import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/shared-store',
      dir: 'dist',
    }
  ],
  cache: false,
  external: ['react', 'react/jsx-runtime', '@brushes/utils'],
  plugins: [
    ts({}),
    terser(),
  ]
};
