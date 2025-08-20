import { useEffect, useState } from 'react';
import { queryCouponListBySkuCode } from 'qj-b2c-api';
import { isEmpty } from 'lodash-es';
// 转化参数
export const computedParams = (rsSkuDomainList: Array<any> = [], skuCode: string) => {
  const obj = rsSkuDomainList.find((item: any) => item.skuCode === skuCode) || {};
  if (isEmpty(obj)) return {};
  const { skuNo, classtreeCode, brandCode, pntreeCode, memberCode } = obj;
  return {
    skuCode,
    skuNo,
    classtreeCode,
    brandCode,
    pntreeCode,
    memberCode
  };
};

export const initialCoupon = {
  promotionBegintime: '',
  pbName: '',
  discName: '',
  promotionCode: '',
  promotionName: '',
  couponOnceNums: 0,
  couponOnceNumd: 0,
  promotionEndtime: ''
};

export function useCoupon(result: Array<any>, skuCode: string) {
  const [coupon, setCoupon] = useState<Array<typeof initialCoupon>>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const pListParams = computedParams(result, skuCode);
      if (isEmpty(pListParams)) return;
      const data = await queryCouponListBySkuCode(pListParams);
      setCoupon(data);
    })();
  }, [skuCode, result]);

  return {
    coupon,
    visible,
    setVisible
  };
}
