import { useEffect, useMemo, useState, useRef } from 'react';
import { deleteShoppingGoodsBatch, queryShoppingPage, queryShoppingToContract } from 'qj-b2c-api';
import { getEnv, taroMessage } from '@brushes/utils';
import { get } from 'lodash-es';
import { useDispatchImpl, useStore } from '@/store/cart/store';
import { updateShoppingGoodsNum } from '@/utils/payment';
import { navigatorHandler } from '@brushes/utils';
import { removeRequestCacheByKey } from '@brushes/optimize';

export const useCartList = (refresh: number) => {
  const [cartList, setCartList] = useState<Array<any>>([]);
  const [disMoney, setDisMoney] = useState(0);
  const allCart = useRef<Array<any>>([]);
  const dispatch = useDispatchImpl();
  const { select, id, count } = useStore();

  const amount = useMemo(() => {
    let num = 0,
      amount = 0;
    cartList.forEach((item: any) => {
      if (select.includes(item.shoppingGoodsId + '')) {
        num += item.goodsCamount;
        amount += item.goodsCamount * item.pricesetNprice;
      }
    });
    return {
      num,
      amount
    };
  }, [select, cartList]);

  useEffect(() => {
    (async () => {
      await initImpl('isFirst');
    })();
  }, [refresh]);

  useEffect(() => {
    if (!id) return;
    updateImpl(id, count);
  }, [id, count]);

  const updateImpl = async (id: number, count: number) => {
    try {
      await updateShoppingGoodsNum({
        shoppingGoodsId: id,
        amount: count,
        goodWeight: 0
      });
      await initImpl();
    } catch (err) {
      console.log(err);
    }
  };

  const initImpl = async (isFirst: string = '') => {
    try {
      const isWeapp = getEnv();

      const data = await queryShoppingPage({
        isLocalMock: !isWeapp
      });
      const rows = get(data, 'list', []);
      const shoppingGoodsListTotal = [] as Array<any>;
      let disMoneyTotal = 0;
      rows.forEach((item: any) => {
        const { shoppingGoodsList, disMoney = 0 } = get(item, 'shoppingpackageList[0]', {
          shoppingGoodsList: [],
          // sumMoney: 0,
          disMoney: 0
        });
        shoppingGoodsListTotal.push(...shoppingGoodsList);
        disMoneyTotal += disMoney || 0;
      });

      allCart.current = shoppingGoodsListTotal.map((item: any) => item.shoppingGoodsId + '');
      if (isFirst) {
        dispatch({
          type: 'select',
          payload: allCart.current
        });
      }
      dispatch({
        type: 'update',
        payload: {
          loading: false
        }
      });
      setDisMoney(disMoneyTotal);
      setCartList(shoppingGoodsListTotal);
    } catch (err: any) {
      taroMessage(err.msg);
    }
  };

  const selectAll = (e: { detail: { value: string[] } }) => {
    dispatch({
      type: 'select',
      payload: e.detail.value.includes('true') ? allCart.current : []
    });
  };

  const toOrderImpl = () => {
    if (select.length === 0) {
      taroMessage('购物数量不能为空');
      return;
    }
    // 购物车到确认订单页面需要清除queryShoppingToContract的缓存
    removeRequestCacheByKey(queryShoppingToContract);
    // 跳转到确认订单
    navigatorHandler('orderDetermine', {
      shoppingGoodsId: select.join(',')
    });
  };

  const deleteCart = async () => {
    try {
      await deleteShoppingGoodsBatch({
        shoppingGoodsIdStr: JSON.stringify(select)
      });
      await initImpl();
    } catch (err) {
      console.log(err);
    }
  };

  return {
    cartList,
    initImpl,
    disMoney,
    amount,
    selectAll,
    allCart,
    toOrderImpl,
    select,
    deleteCart
  };
};
