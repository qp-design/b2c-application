import { useEffect } from 'react';
import { saveFootprint } from 'qj-b2c-api';
import { getGoodDetail } from '@/store/goodsDetail/utils';

export const useGoodFootprint = (skuCode: string) => {
  useEffect(() => {
    (async () => {
      try {
        const result = await getGoodDetail(skuCode);
        saveFootprint({
          // 0 商品 1 店铺 2 其它
          footprintType: 0,
          footprintOpcode: skuCode,
          footprintOppic: result.dataPic,
          footprintOpcont: result.goodsName,
          footprintOpnum: result.pricesetNprice,
          footprintOpurl: ''
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
};
