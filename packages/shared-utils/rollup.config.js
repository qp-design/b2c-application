import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/shared-utils',
      dir: 'dist',
    }
  ],
  cache: false,
  external: ['react', 'react/jsx-runtime', 'qj-b2c-api', '@brushes/simulate-component', '@brushes/mobile-form', '@brushes/utils', '@brushes/request'],
  plugins: [
    ts({}),
    terser(),
  ]
};
