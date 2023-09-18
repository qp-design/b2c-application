import { getResourceGoodsInfoBySkuCode } from 'qj-b2c-api';
import { getEnv } from '@brushes/utils';
import { goodStore } from '../store';
import { noop } from 'lodash-es';

interface GoodsDetailType {
  count: number;
  spec: Array<never>;
  price: number;
  couponValue: number | string;
  popupVisible: boolean;
  goodsNum: number;
  orderType: 1 | 0;
  isNeedButton: boolean;
}

export type actionName = 'plus' | 'minus' | 'select' | 'popupImpl' | 'initGoodSku';

type ActionInterface = {
  type: actionName;
  payload?: Partial<GoodsDetailType>;
};

export function getGoodDetail(skuCode: string) {
  const isWeapp = getEnv();
  return getResourceGoodsInfoBySkuCode({
    skuCode,
    isLocalMock: !isWeapp
  });
}

export function popupImplement(dispatchPageStore = noop) {
  const reduce = (action: ActionInterface) => {
    const state = goodStore.getState();
    switch (action.type) {
      case 'plus':
        return { ...state, count: state.count + 1 };
      case 'minus':
        return { ...state, count: state.count - 1 };
      case 'select':
      case 'initGoodSku':
      case 'popupImpl':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

  const dispatch = (action: ActionInterface) => {
    const state = reduce(action) as GoodsDetailType;
    goodStore.setState(state);
  };

  const openPopup = () => {
    openPopupCommon();
    dispatch({
      type: 'popupImpl',
      payload: {
        isNeedButton: false
      }
    });
  };

  const closePopup = () => {
    dispatchPageStore({
      visible: false
    });
  };

  const openPopupCommon = () => {
    dispatchPageStore({
      visible: true
    });
  };

  const addCardPopup = () => {
    openPopupCommon();
    dispatch({
      type: 'popupImpl',
      payload: {
        orderType: 0,
        isNeedButton: true
      }
    });
  };

  const buyOpenPopup = () => {
    openPopupCommon();
    dispatch({
      type: 'popupImpl',
      payload: {
        orderType: 1,
        isNeedButton: true
      }
    });
  };

  return {
    dispatch,
    openPopup,
    closePopup,
    addCardPopup, // 打开购物车弹出框
    buyOpenPopup // // 打开立即购物弹出框
  };
}
