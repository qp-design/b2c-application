import { useEffect, useRef, useState } from 'react';
import { queryRefundPageBuy } from 'qj-b2c-api';
import { useImmutableCallback } from '@brushes/utils';
import { navigatorHandler } from '@brushes/utils';
import { isEmpty } from 'lodash-es';
import { getEnv } from '@brushes/utils';

export const useAfterSalesList = (item: any, refreshNum: number) => {
  const isScroll = useRef(false);
  const [loading, setLoading] = useState(false);
  const [afterSalesList, setAfterSalesList] = useState([]);
  const page = useRef(0);
  const [haseData, setHasData] = useState(true);

  const isWeapp = getEnv();

  useEffect(() => {
    init();
  }, [refreshNum]);

  useEffect(() => {
    console.log('父组件, 挂载');
    return () => {
      console.log('父组件, 卸载');
    };
  }, [afterSalesList]);
  const init = useImmutableCallback(() => {
    page.current = 0;
    setAfterSalesList([]);
    onScroll();
  });

  const onScroll = useImmutableCallback(async (e = {}) => {
    if (isScroll.current) return;
    setLoading(true);
    ++page.current;
    const { code } = item as any;
    try {
      const result = await queryRefundPageBuy({
        page: page.current,
        rows: 10,
        dataStates: code,
        isLocalMock: !isWeapp
      });
      isScroll.current = isEmpty(result.list) || result.list.length < 10;
      if (result.list.length === 0) {
        setHasData(false);
      }
      setAfterSalesList((prevState) => prevState.concat(result.list || []));
    } catch (err) {
      --page.current;
      console.log(err);
    } finally {
      setLoading(false);
    }
  });

  const goAfterSalesDetail = (refundCode: string) => {
    navigatorHandler('afterSalesDetail', { refundCode });
  };

  return {
    afterSalesList,
    onScroll,
    loading,
    init,
    goAfterSalesDetail,
    haseData
  };
};
