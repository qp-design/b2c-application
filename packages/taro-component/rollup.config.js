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
    "@brushes/shared-utils",
    "react/jsx-runtime",
    "@tarojs/components",
    "react",
    "qj-b2b-api",
    "@brushes/shared-store",
    "lodash-es",
    "qj-mobile-store",
    "@tarojs/taro"],
  plugins: [
    ts({}),
    terser(),
  ]
};
