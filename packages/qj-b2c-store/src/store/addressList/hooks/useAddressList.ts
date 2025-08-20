//@ts-nocheck
import { useEffect, useState } from 'react';
import { deleteAddress, queryAddressBymerberCode, updateAddress } from 'qj-b2c-api';
import { getEnv, getTaro, navigatorHandler } from '@brushes/utils';
import { removeRequestCacheByKey } from '@brushes/optimize';

export function useAddressList(refreshNum: number) {
  const [list, setList] = useState<Array<any>>([]);
  const [skullShow, setSkullShow] = useState(true);
  useEffect(() => {
    getAddressList();
  }, [refreshNum]);

  const navigator = () => {
    navigatorHandler('addressEditor');
  };
  const getAddressList = async () => {
    const isTaro = getEnv();
    const resList = await queryAddressBymerberCode({
      isLocalMock: !isTaro
    });
    setList(resList);
    setSkullShow(false);
  };

  const delAddress = (addressInfo: object) => {
    const isTaro = getEnv();
    if (!isTaro) return;
    const Taro = getTaro();
    Taro.showModal({
      title: '提示',
      content: '确认删除该地址吗？',
      success: async (res: object) => {
        if (res?.confirm) {
          await deleteAddress({ addressId: addressInfo.addressId });
          removeRequestCacheByKey(queryAddressBymerberCode);
          await getAddressList();
        }
      }
    });
  };

  const setDefault = async (addressInfo: any, index: number) => {
    if (addressInfo.addressDefault !== '1') {
      const { addressMember, addressPhone, provinceCode, provinceName, cityCode, cityName, areaCode, areaName, addressDetail, addressId, addressCode, dataState } = addressInfo;

      const params = {
        addressMember,
        addressPhone,
        provinceCode,
        provinceName,
        cityCode,
        cityName,
        areaCode,
        areaName,
        addressDetail,
        addressId,
        addressCode,
        dataState,
        addressDefault: '1'
      };
      setList(replaceArr(index, list));

      await updateAddress(params);
      await getAddressList();
    }
  };

  const replaceArr = (coe: number, arr: any) => {
    const chooseItem = arr[coe];
    arr[coe] = arr[0];
    arr[coe].addressDefault = '0';
    arr[0] = chooseItem;
    arr[0].addressDefault = '1';
    return [...arr];
  };

  return {
    list,
    skullShow,
    delAddress,
    setDefault,
    getAddressList,
    navigator
  };
}
