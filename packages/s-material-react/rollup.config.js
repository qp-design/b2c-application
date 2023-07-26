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
  external: ['antd', 'dayjs', 'react', 'react/jsx-runtime', 'qj-b2c-api', 'qj-mobile-store',
    '@brushes/simulate-component', 'classnames', '@brushes/utils', 'lodash-es', 'china-division/dist/provinces.json',
    'china-division/dist/cities.json', 'china-division/dist/areas.json', 'pubsub-js'],
  plugins: [
    ts({}),
    terser(),
  ]
};
