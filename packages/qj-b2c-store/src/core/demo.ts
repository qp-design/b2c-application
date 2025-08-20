import { makeStore } from './makeStore';

interface GoodsDetailType {
  count: number;
  price: number;
}

type actionName = 'add' | 'minus';

type ActionInterface = {
  type: actionName;
  payload: GoodsDetailType;
};

const defaultValues = {};
function reduceImpl(state: GoodsDetailType, action: ActionInterface) {
  switch (action.type) {
    case 'add':
      return { ...state, ...action.payload };
    case 'minus':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
// demo
export function useGoodsDetail() {
  /**
   * =========== StoreProvider, useStore, useDispatchImpl ============
   * 导出三个参数
   * 第一个是Provider
   * 第二个是Store
   * 第三个是Dispath
   *
   */
  return makeStore(reduceImpl, defaultValues);
}
