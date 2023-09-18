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
  external: [
    "immer",
    "react/jsx-runtime",
    "@brushes/operate-webstore",
    "antd",
    "@brushes/share-resource",
    "@brushes/form",
    "lodash-es",
    "@brushes/utils",
    "qj-b2c-api",
    "qj-b2b-api",
    "dayjs",
    "lzutf8",
    "react",
    "@tanstack/react-query",
    "@brushes/qj-shared-library"
  ],
  plugins: [
    ts({}),
    terser(),
  ]
};
