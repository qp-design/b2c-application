//@ts-nocheck
type actionName = 'select';
type actionType = { type: actionName; payload: Object };

export const initalOrderValue = {
  contractSettlBlance: '',
  contractPmode: '',
  contractSettlGmoney: 0,
  contractSettlPmoney: 0,
  contractSettlOpno: '',
  contractSettlOpemo: '',
  freight: 0
};

// export const orderStore = {
//   current: initalOrderValue,
//   listeners: [],
//   subscribe(listener) {
//     orderStore.listeners.push(listener);
//     return () => {
//       orderStore.listeners = orderStore.listeners.filter((l) => l !== listener);
//     };
//   },
//   getSnapshot() {
//     return orderStore.current;
//   },
//   reduce(state: typeof initalOrderValue, action: actionType) {
//     switch (action.type) {
//       case 'select':
//         return { ...state, ...action.payload };
//       default:
//         return state;
//     }
//   },
//   dispatch(action: actionType) {
//     const state = orderStore.current;
//     orderStore.current = orderStore.reduce(state, action);
//     for (let listener of orderStore.listeners) {
//       listener();
//     }
//   }
// };

import { createStore } from '@/core';
import { useSyncExternalStore } from 'react';

export const orderStore = createStore<Partial<typeof initalOrderValue>>(initalOrderValue);

export function useSyncOrderStore(selector = (state: any) => state) {
  return useSyncExternalStore(orderStore.subscribe, () => selector(orderStore.getState()));
}
