import type { UserConfigExport } from "@tarojs/cli";

export default {
  outputRoot: `unpackage/dist/build/${process.env.TARO_ENV}`,
  env: {
    NODE_PLATFORM: '"MOBILE_TERMINAL"',
    NODE_ENV: '"production"',
    REACT_APP_BASE_URL: '"https://b2cweapp17e3e531af0f47aabeace951a3954840.saas.qjclouds.cn/"',
    REACT_APP_SESSION_KEY: '"saas-token"',
    REACT_APP_APPLICATION: '""',
    REACT_IMG_PATH: '"paas/shop/"'
  },
  mini: {},
  h5: {
    /**
     * WebpackChain 插件配置
     * @docs https://github.com/neutrinojs/webpack-chain
     */
    // webpackChain (chain) {
    //   /**
    //    * 如果 h5 端编译后体积过大，可以使用 webpack-bundle-analyzer 插件对打包体积进行分析。
    //    * @docs https://github.com/webpack-contrib/webpack-bundle-analyzer
    //    */
    //   chain.plugin('analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    //   /**
    //    * 如果 h5 端首屏加载时间过长，可以使用 prerender-spa-plugin 插件预加载首页。
    //    * @docs https://github.com/chrisvfritz/prerender-spa-plugin
    //    */
    //   const path = require('path')
    //   const Prerender = require('prerender-spa-plugin')
    //   const staticDir = path.join(__dirname, '..', 'dist')
    //   chain
    //     .plugin('prerender')
    //     .use(new Prerender({
    //       staticDir,
    //       routes: [ '/pages/index/index' ],
    //       postProcess: (context) => ({ ...context, outputPath: path.join(staticDir, 'index.html') })
    //     }))
    // }
  }
} satisfies UserConfigExport
