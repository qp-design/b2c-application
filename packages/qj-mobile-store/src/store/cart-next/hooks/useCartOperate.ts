import { deleteShoppingGoodsBatch, queryShoppingToContract } from 'qj-b2c-api';
import { Dispatch, useMemo } from 'react';
import { navigatorHandler, taroMessage, useImmutableCallback } from '@brushes/utils';
import { noop } from 'lodash-es';
import { removeRequestCacheByKey } from '@brushes/optimize';

export function useCartOperate(select: Array<any> = [], cardGoods: Array<any> = [], dispatchPageStore: Dispatch<any> = noop) {
  const cartDetail = useMemo(() => {
    let num = 0,
      canPayIds = [],
      amount = 0;

    for (let item of cardGoods) {
      if (!select.includes(item.shoppingGoodsId + '')) {
        continue;
      }
      if (item.dataState === 0) {
        canPayIds.push(item.shoppingGoodsId + '');
        num += item.goodsCamount;
        amount += item.goodsCamount * item.pricesetNprice;
      }
    }

    return {
      num,
      canPayIds,
      amount
    };
  }, [select, cardGoods]);

  const func = useImmutableCallback((shoppingGoodsList: Array<any>) => {
    return shoppingGoodsList.map((item: any) => item.shoppingGoodsId + '');
  });

  const selectAll = useImmutableCallback((e: { detail: { value: string[] } }) => {
    dispatchPageStore({
      select: e.detail.value.includes('true') ? func(cardGoods) : []
    });
  });

  const deleteCart = useImmutableCallback(async () => {
    try {
      await deleteShoppingGoodsBatch({
        shoppingGoodsIdStr: JSON.stringify(select)
      });
      dispatchPageStore((prevState: any) => {
        let num = prevState.updateCount || 0;
        return {
          updateCount: ++num
        };
      });
    } catch (err) {
      console.log(err);
    }
  });

  const toOrderImpl = useImmutableCallback(() => {
    if (cartDetail.canPayIds.length === 0) {
      taroMessage('购物数量不能为空');
      return;
    }
    // 购物车到确认订单页面需要清除queryShoppingToContract的缓存
    removeRequestCacheByKey(queryShoppingToContract);
    // 跳转到确认订单
    navigatorHandler('orderDetermine', {
      shoppingGoodsId: cartDetail.canPayIds.join(',')
    });
  });

  return {
    toOrderImpl,
    deleteCart,
    selectAll,
    cartDetail
  };
}
