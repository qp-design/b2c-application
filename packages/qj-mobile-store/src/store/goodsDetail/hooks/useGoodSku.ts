import { useMemo } from 'react';
import { groupBy, get } from 'lodash-es';

interface SkuItemType {
  skuName: string;
  skuOption: Array<any>;
}

function computedSkuImpl(params: Array<any>): Array<SkuItemType> {
  const data = groupBy(params, 'specName');
  if (!data) return [] as Array<SkuItemType>;
  return Object.keys(data).map((item: string) => ({
    skuName: item,
    skuOption: data[item]
  }));
}

export function useGoodSku(rsSpecValueDomainList: Array<any>) {
  return useMemo(() => {
    const skuList = computedSkuImpl(rsSpecValueDomainList);
    const spec = skuList.map((item) => get(item, 'skuOption[0].specValueValue'));
    return {
      skuList,
      spec
    };
  }, [rsSpecValueDomainList]);
}
