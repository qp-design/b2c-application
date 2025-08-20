import { useEffect, useState } from 'react';
import { queryPromotionListByGoodsCode } from 'qj-b2c-api';
import { computedParams } from './useCoupon';
import { isEmpty } from 'lodash-es';

export function usePromotion(rsSkuDomainList: Array<any>, skuCode: string) {
  const [promote, setPromote] = useState([]);

  useEffect(() => {
    (async () => {
      const pListParams = computedParams(rsSkuDomainList, skuCode);
      if (isEmpty(pListParams)) return;
      const data = await queryPromotionListByGoodsCode(pListParams);
      setPromote(data);
    })();
  }, [skuCode, rsSkuDomainList]);

  return promote;
}
