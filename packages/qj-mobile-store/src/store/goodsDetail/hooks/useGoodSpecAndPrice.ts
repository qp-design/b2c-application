import { useGoodSkuStore } from '../store';
import { useMemo } from 'react';
import { orderBy } from 'lodash-es';
export const useGoodSpecAndPrice = (rsSkuDomainList: Array<any> = []) => {
  const spec = useGoodSkuStore((state: any) => state.spec);

  const goodInfo = useMemo(() => {
    return rsSkuDomainList.find((item) => item.skuName === orderBy(spec).join('/')) || {};
  }, [spec, rsSkuDomainList]);

  return {
    spec,
    goodInfo
  };
};
