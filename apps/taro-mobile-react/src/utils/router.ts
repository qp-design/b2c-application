import Taro from '@tarojs/taro';

export const isTopPage = () => {
  const pageLength = Taro.getCurrentPages().length;
  return pageLength === 1;
}
