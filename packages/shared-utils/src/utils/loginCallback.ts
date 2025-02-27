import { getTaro } from '@brushes/utils';
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
  return obj.pageIndex;
};

export const callback = () => {
  const Taro = getTaro();
  Taro.navigateBack({
    delta: stackLength(),
    success: function () {
      errorCallback();
    }
  });
};
