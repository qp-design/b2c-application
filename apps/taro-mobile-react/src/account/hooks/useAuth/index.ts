import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {queryProappEnvPage, saveUmuserPhoneNoCodeByWX, warrantyLogin} from 'qj-b2c-api';
import { get } from 'lodash-es'
import {errorCallback} from '@brushes/request';
import {stackLength} from '@/account/hooks';

export const useAuth = () => {
  const [bg, setBg] = useState('');
  const [logo, setLogo] = useState('');
  const [agree, setAgree] = useState(true);

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    try {
      const res = await queryProappEnvPage();
      const result = res.list[0];
      setBg(`https://www.${result.proappEnvDomain}${result.proappEnvIndexc}`);
      setLogo(`https://www.${result.proappEnvDomain}${result.proappEnvLogo}`);
    }catch (err) {
      console.log(err)
    }
  }

  const agreeFunc = (e) => {
    if(e.detail.value.length) {
      setAgree(true);
    }else {
      setAgree(false);
    }
  }

  const getPhone = async (e) => {
    Taro.login({
      success: async (res) => {
        const warrantyResult = await warrantyLogin({
          'js_code': res.code
        })

        const { register, userInfo, userOpenid } = get(warrantyResult, 'dataObj');

        if(register === 'true') {
          const result = await registerImpl(e, userOpenid)
          setAuthImpl(result.dataObj.ticketTokenid)
          return
        }

        const user = JSON.parse(userInfo);
        setAuthImpl(user.ticketTokenid);
      }
    })
  }

  const registerImpl = (e, userOpenid) => saveUmuserPhoneNoCodeByWX({
    code: e.detail.code,
    userOpenid
  })

  const setAuthImpl = (token) => {
    Taro.setStorageSync('saas-token', token);
    callback()
  }

  const callback = () => {
    Taro.navigateBack({
      delta: stackLength(),
      success: function () {
        errorCallback()
      }
    })
  }

  return {
    bg,
    logo,
    agreeFunc,
    setAgree,
    agree,
    getPhone
  }
}
