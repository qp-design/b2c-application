import {queryProappConfigByChannel} from 'qj-b2c-api';
import {useEffect, useRef, useState} from "react";
import Taro from '@tarojs/taro';
import {get} from 'lodash-es';

export const useAgreement = (type?:string) => {
  const [agreementData, setAgreementData] = useState('');
  const proappCode = useRef('');

  useEffect(() => {
    (async () => {
      setProappCode()
      const result = await queryProappConfigByChannel();
      const resultArr = get(result, 'list');
      for(let i =0; i< resultArr.length; i++) {
        if(resultArr[i].proappCode === proappCode.current && resultArr[i].proappConfigType === type) {
          setAgreementData(resultArr[i].proappConfigText2)
          break;
        }
      }
    })()
  }, [])

  const setProappCode = () => {
    const platform = process.env.TARO_ENV;
    switch (platform) {
      case 'h5':
        proappCode.current = '003';
        break;
      case 'weapp':
        proappCode.current = '025';
        break;
    }
  }

  const goDetail = (agreeType: string) => {
    Taro.navigateTo({
      url: `/account/agreement/index?type=${agreeType}`
    })
  }


  return {
    agreementData,
    goDetail
  }
}
