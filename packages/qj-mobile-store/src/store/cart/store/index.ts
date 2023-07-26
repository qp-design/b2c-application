//@ts-nocheck
import { makeStore } from '@/core';

interface Cart {
  id: string;
  count: number;
  loading: boolean;
  select: string[];
}

type actionName = 'update' | 'select';

type ActionInterface = {
  type: actionName;
  payload: Cart;
};

const defaultValues = {
  id: '',
  count: 0,
  loading: false,
  select: []
};

function reduceImpl(state: Cart, action: ActionInterface) {
  switch (action.type) {
    case 'select':
      return { ...state, select: action.payload };
    case 'update':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
/**
 * =========== StoreProvider, useStore, useDispatchImpl ============
 * 导出三个参数
 * 第一个是Provider
 * 第二个是Store
 * 第三个是Dispath
 *
 */
const [StoreProvider, useStore, useDispatchImpl] = makeStore(reduceImpl, defaultValues);
export { StoreProvider, useStore, useDispatchImpl };
