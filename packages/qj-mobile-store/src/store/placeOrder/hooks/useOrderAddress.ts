//@ts-nocheck
import { useEffect, useState } from 'react';
import { calculateFreightFare, queryAddressBymerberCode } from 'qj-b2c-api';
import { getEnv } from '@brushes/utils';
import { isEmpty, orderBy } from 'lodash-es';
import { userAddressData } from '@/utils';
import { orderStore } from '../store';

export const addressInitial = {
  provinceName: '',
  cityName: '',
  areaName: '',
  addressDetail: '',
  addressMember: '',
  addressPhone: '',
  addressDefault: '',
  addressId: '',
  areaCode: '',
  userName: ''
};

export function useOrderAddress(refreshNum: string, goodsNum: number, skuId: string, shoppingGoodsId: string) {
  const [address, setAddress] = useState<typeof addressInitial>(addressInitial);
  useEffect(() => {
    (async () => {
      try {
        const isTaro = getEnv();
        const addressData = await queryAddressBymerberCode({
          isLocalMock: !isTaro,
          needCache: true
        });
        const fetchAddress = () => {
          const newAddressList = orderBy(addressData, 'addressDefault', 'asc');
          const data = newAddressList.find((item: typeof addressInitial) => refreshNum === item.addressId) || {};
          if (isEmpty(data)) {
            return newAddressList.at(-1);
          }
          return data;
        };

        const result = fetchAddress();
        userAddressData.addressInfo = result;
        setAddress(result);
        freightCalculation(result?.provinceCode);
      } catch (err) {}
    })();
  }, [refreshNum]);

  //运费计算
  const freightCalculation = async (areaCode: string) => {
    let payload = {};
    if (shoppingGoodsId) {
      // 购物车计算运费
      payload = { shoppingGoodsIdStr: `[${shoppingGoodsId}]` };
    } else {
      // 商品详情计算运费
      payload = { skuIdStr: JSON.stringify([{ skuId, goodsNum }]) };
    }
    try {
      const isTaro = getEnv();
      const data = await calculateFreightFare({
        isLocalMock: !isTaro,
        ...payload,
        areaCode
      });
      orderStore.setState({
        freight: data.dataObj
      });
    } catch (err) {}
  };

  return address;
}
