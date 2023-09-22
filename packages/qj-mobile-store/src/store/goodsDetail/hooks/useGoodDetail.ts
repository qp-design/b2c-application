import {useEffect, useState} from 'react';
import { getGoodDetail } from '@/store/goodsDetail/utils';
import {getUserInfoAuth} from 'qj-b2c-api';

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
  goodsThdate: '',
  goodsOdate: '',
  goodsDayinfo: '',
  rsSkuDomainList: []
};

export const useGoodDetail = (skuCode: string, scene: string = '') => {
  const [state, setState] = useState<typeof initialValue>(initialValue);
  useEffect(() => {
    (async () => {
      try {
        let sku = skuCode
        if(scene) {
          const data = await getUserInfoAuth({key: scene});
          let params = data.split('_');
          sku = params[0];
        }
        const goodsDetailResult = await getGoodDetail(sku);
        //@ts-ignore
        setState(goodsDetailResult || initialValue);
      } catch (err: any) {}
    })();
  }, []);

  return state;
};
