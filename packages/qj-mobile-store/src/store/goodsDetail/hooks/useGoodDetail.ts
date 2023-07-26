import { useEffect, useState } from 'react';
import { getGoodDetail } from '@/store/goodsDetail/utils';

export const initialValue = {
  rsGoodsFileDomainList: [],
  rsSpecValueDomainList: [],
  goodsRemark: '',
  pricesetNprice: 0,
  goodsName: '',
  dataPic: '',
  goodsShowname: '',
  goodsNum: 0,
  goodsCode: '',
  skuNo: '',
  classtreeCode: '',
  brandCode: '',
  pntreeCode: '',
  memberCode: '',
  rsSkuDomainList: []
};

export const useGoodDetail = (skuCode: string) => {
  const [state, setState] = useState<typeof initialValue>(initialValue);
  useEffect(() => {
    (async () => {
      try {
        const goodsDetailResult = await getGoodDetail(skuCode);
        setState(goodsDetailResult || initialValue);
      } catch (err: any) {}
    })();
  }, []);

  return state;
};
