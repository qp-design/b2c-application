import { useEffect, useRef, useState } from 'react';
import { find } from 'qj-b2c-api';
import { isEqual, isEmpty } from 'lodash-es';

interface useGoodsType {
  defaultValue: Array<any>;
  goods: Array<any>;
}

export const useGoods = ({ defaultValue, goods }: useGoodsType, apiKey: string) => {
  const [list, setList] = useState<Array<any>>(defaultValue);
  const preGoods = useRef<Array<any>>();

  useEffect(() => {
    if (isEqual(preGoods.current, goods)) return;
    preGoods.current = goods;
    if (isEmpty(goods)) {
      setList(defaultValue);
      return;
    }
    (async () => {
      try {
        const data = await find({ [apiKey]: goods.toString(), distinctField: 'goodsNo' });
        setList(data.list);
      } catch (err) {
        setList(defaultValue);
      }
    })();
  }, [goods]);

  return {
    list
  };
};
