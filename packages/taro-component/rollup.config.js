import ts from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '@brushes/taro-component',
      file: 'dist/index.js',
    }
  ],
  cache: false,
  external: [
    "@brushes/simulate-component",
    "@brushes/taro-hooks",
    "@brushes/utils",
    "react/jsx-runtime",
    "@tarojs/components",
    "react",
    "lodash-es",
    "qj-mobile-store",
    "@tarojs/taro",
    "s-material-react"
  ],
  plugins: [
    ts({}),
    terser(),
  ]
};
