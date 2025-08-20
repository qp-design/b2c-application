import { Dispatch, useEffect, useState, useRef } from 'react';
import { queryShoppingPage, updateShoppingGoodsCheckState, updateShoppingGoodsNum, updateShoppingGoodsPmInfo } from 'qj-b2c-api';
import { getEnv, taroMessage } from '@brushes/utils';
import { get, noop, difference } from 'lodash-es';

export const useCartListNext = (refresh: number, updateCount: number, dispatchPageStore: Dispatch<any> = noop) => {
  const [cartList, setCartList] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const localList = useRef<Array<any>>([]);

  useEffect(() => {
    (async () => {
      await initImpl('isFirst');
    })();
  }, [refresh, updateCount]);

  const initImpl = async (isFirst = '') => {
    try {
      setLoading(true);
      const isWeapp = getEnv();
      const data = await queryShoppingPage({
        isLocalMock: !isWeapp
      });
      goodImplFunc(data, isFirst);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const goodImplFunc = (data: any, isFirst: string) => {
    const rows = get(data, 'list', []);
    const shoppingGoodsListTotal = [] as Array<any>;
    rows.forEach((item: any) => {
      const list = get(item, 'shoppingpackageList', []);
      shoppingGoodsListTotal.push(...list);
    });
    setCartList(shoppingGoodsListTotal);

    // store
    dispatchImpl(shoppingGoodsListTotal, isFirst);
  };

  const dispatchImpl = (shoppingGoodsList: Array<any>, isFirst: string) => {
    const { list, disMoney } = computedGoods(shoppingGoodsList);
    localList.current = list;
    console.log('48=====>', list);
    const ids = localList.current.map((item: any) => item.shoppingGoodsId + '');
    const isAppendParams = {} as any;

    if (isFirst) {
      isAppendParams.select = ids;
    }
    dispatchPageStore({
      disMoney,
      cartInfo: localList.current,
      ...isAppendParams
    });
  };

  const updatePm = async (shoppingGoodsId: string, promotionCode: string) => {
    try {
      await updateShoppingGoodsPmInfo({
        shoppingGoodsId,
        promotionCode
      });
      await initImpl();
    } catch (err) {
      console.log(err);
    }
  };

  const computedGoods = (lists: Array<any>) => {
    let list = [] as Array<any>,
      disMoney = 0;
    lists.forEach((item: any) => {
      disMoney += item.disMoney || 0;
      list.push(...item.shoppingGoodsList);
    });
    return {
      list,
      disMoney
    };
  };

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

  const handleStep = (id: number, amount: number, type: string) => {
    if (amount === 1 && type === 'minus') {
      taroMessage('不能小于1', 'none');
      return;
    }
    const count = type === 'plus' ? ++amount : --amount;

    updateImpl(id, count);
  };

  const updateGoodCheck = async (next: Array<string>, prev: Array<string>) => {
    let id = '';
    if (next.length > prev.length) {
      id = difference(next, prev).join('');
    } else {
      id = difference(prev, next).join('');
    }
    const { shoppingCode } = localList.current.find((item) => item.shoppingGoodsId + '' === id) || {};

    try {
      await updateShoppingGoodsCheckState({
        shoppingGoodsIdStr: id,
        shoppingCode,
        checkState: +(prev.length > next.length),
        channelCode: 'channelCode'
      });
      await initImpl();
    } catch (err) {}
  };

  const onChange = (e: { detail: { value: string[] } }) => {
    console.log(131, e);
    dispatchPageStore((prevState: any) => {
      updateGoodCheck(e.detail.value, prevState.select);
      return {
        cartInfo: localList.current,
        select: e.detail.value
      };
    });
  };

  return {
    cartList,
    loading,
    onChange,
    handleStep,
    updatePm
  };
};
