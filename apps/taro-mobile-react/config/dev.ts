import type { UserConfigExport } from "@tarojs/cli";

export default {
  logger: {
    quiet: false,
    stats: true
  },
  env: {
    NODE_PLATFORM: '"MOBILE_TERMINAL"',
    NODE_ENV: '"development"',
    REACT_APP_BASE_URL: '"https://b2clch580b47e8dd8c540b69edce7522d0cfd71.saas.qjclouds.cn/"',
    WEAPP: '"https://b2clch5602e8be22bda48f68a550544e6ef42c1.saas.qjclouds.com/"',
    WEB: '"https://b2clch5cbaf0d729c1b4c7285b05271a454a4ff.saas.qjclouds.com/"',
    REACT_APP_SESSION_KEY: '"saas-token"',
    REACT_IMG_PATH: '"paas/shop/"',
    REACT_APP_APPLICATION: '""',
  },
  mini: {},
  h5: {}
} satisfies UserConfigExport
