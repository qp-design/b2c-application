import { find } from 'qj-b2c-api';
import { useEffect, useRef, useState } from 'react';
import { useImmutableCallback } from '@/utils/useImmutableCallback';
import { isEmpty } from 'lodash-es';

export interface FilterType {
  sortField: string;
  order?: string | undefined;
}

export interface ListType {
  skuCode: string;
  dataPic: string;
  goodsName: string;
  pricesetNprice: number;
  pricesetMakeprice: number;
  goodsNum: number;
}

export const useGoodsList = (classtreeCode: string, searchParam: string, filterParmas: FilterType) => {
  const isCanScroll = useRef(true);
  const num = useRef(0);
  const [list, setList] = useState<Array<ListType>>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    resetImpl('isFirst');
  }, [filterParmas]);

  const resetImpl = useImmutableCallback((isFirst: string) => {
    num.current = 0;
    isCanScroll.current = true;
    getData(filterParmas, isFirst);
  });

  const getData = useImmutableCallback(async ({ sortField = 'pricesetNprice', order = '' }, isFirst = '') => {
    if (!isCanScroll.current) return;
    ++num.current;
    setLoading(true);
    try {
      const response = await find({
        distinctField: 'goodsNo',
        sortField,
        order: order,
        goodsType: '00,50',
        page: num.current,
        rows: 10,
        searchParam,
        classtreeCode
      });
      if (isEmpty(response.list) || response.list.length < 10) {
        isCanScroll.current = false;
      }
      setLoading(false);
      setList((prevState) => {
        if (!isFirst) {
          return prevState.concat(response.list);
        }
        return response.list;
      });
    } catch (err) {
      --num.current;
    }
  });

  return {
    loading,
    getData,
    list
  };
};
