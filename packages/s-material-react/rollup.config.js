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
  cache: false,
  external: ['antd', 'dayjs', 'react', '@brushes/shared-store', 'react/jsx-runtime', 'qj-b2c-api', 'qj-mobile-store',
    '@brushes/shared-utils', '@brushes/simulate-component', 'qj-b2b-api', 'classnames', '@brushes/utils',
    'lodash-es', '@brushes/mobile-form'],
  plugins: [
    ts({}),
    terser(),
  ]
};
