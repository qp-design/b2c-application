import { getTaro, navigatorHandler } from '@brushes/utils';
import { errorCallback } from '@brushes/request';

export const stackLength = () => {
  const Taro = getTaro();
  const arr = Taro.getCurrentPages();

  const obj = {
    pageIndex: 0
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]['$taroPath'].indexOf('account/') >= 0) {
      if (i === 0) {
        obj.pageIndex = 0;
      } else {
        obj.pageIndex = arr.length - i;
      }
      break;
    }
  }
  return {
    key: obj.pageIndex,
    i: Taro.getCurrentPages().length
  };
};

export const callback = () => {
  const Taro = getTaro();
  const { key, i } = stackLength();
  if (i === 0) {
    navigatorHandler('index');
    return;
  }
  Taro.navigateBack({
    delta: key,
    success: function () {
      errorCallback();
    }
  });
};
