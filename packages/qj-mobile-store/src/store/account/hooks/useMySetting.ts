import { miniLogout } from 'qj-b2c-api';
import { navigatorHandler, getTaro, navigatorBackImpl } from '@brushes/utils';
import { routerMap, showToast } from '@/utils';

export const useMySetting = () => {
  const mySettingGoBind = () => {
    navigatorHandler(routerMap.confirmPhone);
  };

  const mySettingLogout = async () => {
    const Taro = getTaro();
    try {
      const result = await miniLogout();
      Taro.removeStorage({
        key: 'saas-token'
      });
      showToast(result.msg);
      setTimeout(() => {
        navigatorBackImpl(1);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    mySettingGoBind,
    mySettingLogout
  };
};
