import { checkSkuSpec, addCardSku } from '@/utils/payment';
import { getPagesRefreshStore, navigatorHandler, taroMessage, updatePagesRefreshStore } from '@brushes/utils';
import { get, isEmpty, noop, orderBy } from 'lodash-es';
import { useEffect } from 'react';
import { goodStore } from '../store';
import { actionName, popupImplement } from '../utils';
import { useImmutableCallback } from '@/utils/useImmutableCallback';

export function useAddShopping(goodsCode: string, skuInfo: Object, rsSkuDomainList: Array<any>, dispatchPageStore = noop) {
  const { dispatch, closePopup } = popupImplement(dispatchPageStore);
  useEffect(() => {
    // 初始化
    const specDefaultValue = get(skuInfo, 'spec', []);
    const goodsMinnum = get(rsSkuDomainList, '[0]goodsMinnum', 1);
    if (isEmpty(specDefaultValue)) return;
    dispatch({
      type: 'initGoodSku',
      payload: {
        offShelf: false,
        count: goodsMinnum || 1,
        spec: specDefaultValue
      }
    });
  }, [skuInfo]);

  const isExistImpl = (params: string) => {
    return rsSkuDomainList.find((item) => item.skuName === params) || {};
  };

  const handleChooseSize = useImmutableCallback((value: string, index: number) => {
    const currentState = goodStore.getState();
    const { spec: specOne } = currentState;
    //@ts-ignore
    specOne[index] = value;

    const skuItem = isExistImpl(orderBy(specOne).join('/'));
    const isExist = isEmpty(skuItem);
    dispatch({
      type: 'select',
      payload: {
        offShelf: isExist,
        count: skuItem.goodsMinnum || 1,
        spec: [...specOne]
      }
    });
    if (isExist) {
      taroMessage('该规格已下架', 'none');
    }
  });

  const handleStep = (goodsNum: number, goodsMinnum: number, type: actionName) => {
    const { count } = goodStore.getState();
    if (count === goodsMinnum && type === 'minus') {
      taroMessage(`不能小于${goodsMinnum}`, 'none');
      return;
    }
    if (type === 'plus' && count === goodsNum) {
      taroMessage('超库存', 'none');
      return;
    }
    dispatch({
      type
    });
  };

  const addCardImpl = async () => {
    try {
      const currentState = goodStore.getState();
      const { spec, count } = currentState;
      const data = await checkSkuSpec(spec, goodsCode);
      // 购物车组件刷新
      // CartList 是对应的购物车列表组件
      const { CartList = 0 } = getPagesRefreshStore();
      updatePagesRefreshStore({
        CartList: CartList + 1
      });
      const skuId = get(data, 'dataObj.skuId');
      const info = await addCardSku(skuId, count);
      await taroMessage(info.msg || '添加成功');
      closePopup();
    } catch (err: any) {
      await taroMessage(err, 'error');
    }
  };

  const cashImpl = async () => {
    const currentState = goodStore.getState();
    const { spec, count } = currentState;
    const data = await checkSkuSpec(spec, goodsCode);
    const skuId = get(data, 'dataObj.skuId');
    navigatorHandler('orderDetermine', {
      skuId,
      goodsNum: count
    });
  };

  const addShoppingImpl = () => {
    const currentState = goodStore.getState();
    const { orderType } = currentState;
    if (orderType === 0) {
      // 添加到购物车
      addCardImpl();
    } else {
      // 去支付页面
      cashImpl();
    }
  };

  return {
    closePopup,
    addCardImpl, // 加入购物车
    cashImpl, // 立即购物
    handleChooseSize, // 规格选择方法
    handleStep, // 数量操作方法
    addShoppingImpl // 立即购物 - 购物车
  };
}
