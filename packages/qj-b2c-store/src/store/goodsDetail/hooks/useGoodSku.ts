import { useMemo } from 'react';
import { groupBy, get, orderBy } from 'lodash-es';

interface SkuItemType {
  skuName: string;
  skuOption: Array<any>;
}

function computedSkuImpl(params: Array<any>): Array<SkuItemType> {
  const data = groupBy(orderBy(params, ['specValueValue']), 'specName');
  if (!data) return [] as Array<SkuItemType>;
  return Object.keys(data).map((item: string) => ({
    skuName: item,
    skuOption: data[item]
  }));
}

export function useGoodSku(rsSpecValueDomainList: Array<any>, rsSkuDomainList: Array<any>) {
  return useMemo(() => {
    const skuList = computedSkuImpl(rsSpecValueDomainList);
    const spec = get(rsSkuDomainList, '[0]skuName', '').split('/');
    return {
      skuList,
      spec
    };
  }, [rsSpecValueDomainList]);
}
