import { getEnv, getTaro } from '@brushes/utils';
import { useMemo } from 'react';

export function useSafeTabBar(bottomHeight: number | string = ''): number {
  return useMemo(() => {
    const isTaro = getEnv();
    if (!isTaro) return 0;

    const Taro = getTaro();
    const safe = Taro.getStorageSync('safeArea');
    const tabBarHeight = Taro.getStorageSync('tabBarHeight') || 0;
    const tabBar = Taro.getCurrentPages().at(-1).$taroPath.indexOf('pages/') >= 0 ? tabBarHeight : 0;
    const bottomHeightNum = bottomHeight ? +bottomHeight : 0;

    return safe + tabBar + bottomHeightNum;
  }, []);
}
