import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'api-index',
      dir: 'dist',
    }
  ],
  cache:false,
  external: ['antd-mobile', '@brushes/utils', 'react', 'lodash-es', 'react/jsx-runtime', '@brushes/simulate-component'],
  plugins: [
    ts({}),
    terser(),
  ]
};
