import { useGoodSkuStore } from '../store';
import { useMemo } from 'react';
import { orderBy } from 'lodash-es';
export const useGoodSpecAndPrice = (rsSkuDomainList: Array<any> = []) => {
  const spec = useGoodSkuStore((state: any) => state.spec);
  const goodInfo = useMemo(() => {
    const { goodsName, pricesetNprice, dataPic, skuCode, goodsNum } = rsSkuDomainList.find((item) => item.skuName === orderBy(spec).join('/')) || {};
    return {
      goodsName,
      skuCode,
      pricesetNprice,
      dataPic,
      goodsNum
    };
  }, [spec, rsSkuDomainList]);

  return {
    spec,
    goodInfo
  };
};
