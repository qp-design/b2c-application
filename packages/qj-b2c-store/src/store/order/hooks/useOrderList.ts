import { useEffect, useState, useRef } from 'react';
import { queryContractPageC, cancelUnpayOrder } from 'qj-b2c-api';
import { getEnv, useImmutableCallback } from '@brushes/utils';
import { isEmpty } from 'lodash-es';

const orderGoodsItem = {
  dataPic: '',
  goodsName: '',
  dataBmoney: 0,
  goodsCamount: 0,
  contractGoodsId: 0,
  dataState: 0
};

export const orderType = {
  contractBillcode: '',
  goodsList: [orderGoodsItem],
  dataBmoney: 0,
  dataBnum: 0,
  dataState: 0,
  contractId: '',
  contractAppraise: 0
};

export function useOrderList<T>(item: T, refreshNum: number) {
  const isScroll = useRef(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<(typeof orderType)[]>([orderType]);
  const num = useRef(0);
  useEffect(() => {
    init();
  }, [refreshNum]);

  const init = useImmutableCallback(() => {
    isScroll.current = false;
    num.current = 0;
    onScroll();
  });

  const onScroll = useImmutableCallback(async () => {
    if (isScroll.current) return;
    setLoading(true);
    ++num.current;
    const { code } = item as any;
    try {
      const isTaro = getEnv();
      const data = await queryContractPageC({
        page: num.current,
        rows: 10,
        isLocalMock: !isTaro,
        childFlag: true,
        dataStateStr: code
      });
      const arr = data.list || [];
      isScroll.current = isEmpty(arr) || arr.length < 10;
      setData((prevState) => {
        if (num.current !== 1) {
          return prevState.concat(arr);
        }
        return arr;
      });
      setLoading(false);
    } catch (err) {}
  });

  const countdownCancel = async (contractId: string | number) => {
    await cancelUnpayOrder({ contractId });
  };

  return {
    onScroll,
    data,
    loading,
    init,
    countdownCancel
  };
}
