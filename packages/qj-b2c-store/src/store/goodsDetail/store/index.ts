import { createStore } from '@/core';
import { useSyncExternalStore } from 'react';

export const goodStore = createStore({
  count: 1,
  isNeedButton: false,
  goodsNum: 1,
  spec: [],
  orderType: 0,
  offShelf: false
});

export function useGoodSkuStore(selector = (state: any) => state) {
  return useSyncExternalStore(goodStore.subscribe, () => selector(goodStore.getState()));
}
