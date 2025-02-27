import { createFastContext } from '@brushes/utils';

type Module = {
  module: string; // 模版Code
  theme: {
    mainColor: string; // 主色
    sbuColor: string; // 辅助色
    success: string; // 功能色-成功
    fail: string; // 功能色-失败
    warn: string; // 功能色-警告
    link: string; // 功能色-链接
    [v: string]: any;
  };
  [v: string]: any;
};

export const { Provider, useStore } = createFastContext<Module>({
  module: '',
  theme: {
    mainColor: '', //
    sbuColor: '',
    success: '',
    fail: '',
    warn: '',
    link: ''
  }
});
