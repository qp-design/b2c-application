import { useEffect, useState } from 'react';
import { getAddress, queryAddressBymerberCode, saveAddress, updateAddress } from 'qj-b2c-api';
import { getPagesRefreshStore, navigatorBackImpl, updatePagesRefreshStore } from '@brushes/utils';
import { removeRequestCacheByKey } from '@brushes/optimize';

const userCode = '00000017';

export function useEditAddress(addressId: string | undefined, Form: any, isWeapp: boolean) {
  const [form] = Form.useForm();
  const [defaultAddress, setDefaultAddress] = useState('1');
  const [skullShow, setSkullShow] = useState(true);
  const [area, setArea] = useState({
    provinceCode: '',
    provinceName: '',
    cityCode: '',
    cityName: '',
    areaCode: '',
    areaName: ''
  });

  useEffect(() => {
    if (addressId || !isWeapp) {
      initForm();
    } else {
      form.setFieldValue('addressDefault', defaultAddress);
      setSkullShow(false);
    }
  }, []);

  const initForm = () => {
    getAddress({ addressId, isLocalMock: !isWeapp }).then((res: any) => {
      const resultArea = {
        provinceCode: res.provinceCode,
        cityCode: res.cityCode,
        areaCode: res.areaCode,
        provinceName: res.provinceName,
        cityName: res.cityName,
        areaName: res.areaName
      };
      setArea(resultArea);
      setDefaultAddress(res.addressDefault);
      form.setFieldValue('addressMember', res.addressMember);
      form.setFieldValue('addressPhone', res.addressPhone);
      form.setFieldValue('addressDetail', res.addressDetail);
      form.setFieldValue('area', resultArea);
      form.setFieldValue('addressDefault', res.addressDefault);
      form.validateFields();
      setSkullShow(false);
    });
  };

  const handleArea = (type: any, val: any) => {
    const result = {
      provinceCode: '',
      cityCode: '',
      areaCode: '',
      provinceName: '',
      cityName: '',
      areaName: ''
    };
    if (type === 'weapp') {
      const codeArr = val.detail.code;
      const nameArr = val.detail.value;
      result.provinceCode = codeArr[0];
      result.cityCode = codeArr[1];
      result.areaCode = codeArr[2];
      result.provinceName = nameArr[0];
      result.cityName = nameArr[1];
      result.areaName = nameArr[2];
    } else if (type === 'h5') {
      result.provinceCode = val.provinceCode;
      result.cityCode = val.cityCode;
      result.areaCode = val.areaCode;
      result.provinceName = val.provinceName;
      result.cityName = val.cityName;
      result.areaName = val.areaName;
    }
    setArea(result);
    form.setFieldValue('area', result);
    form.validateFields();
  };

  const addressIo = (params: any) => {
    if (addressId) {
      return updateAddress({ addressId, ...params });
    }
    return saveAddress(params);
  };

  const handleFinish = async (data: any) => {
    data.addressDefault = data.addressDefault ? '1' : '0';
    const result = Object.assign(data, data.area);
    delete result.area;
    try {
      await addressIo({ ...result, userCode });
      removeRequestCacheByKey(queryAddressBymerberCode);
      let { AddressList = 0 } = getPagesRefreshStore();
      updatePagesRefreshStore({
        AddressList: ++AddressList
      });
      navigatorBackImpl(-1);
    } catch (err) {}
  };

  const handleDefaultAddress = (type: string, result: any) => {
    if (type === 'h5') {
      setDefaultAddress(result ? '1' : '0');
    } else if (type === 'weapp') {
      setDefaultAddress(result.detail.value ? '1' : '0');
    }
  };

  return {
    skullShow,
    form,
    area,
    setArea,
    userCode,
    defaultAddress,
    handleArea,
    handleDefaultAddress,
    handleFinish
  };
}
