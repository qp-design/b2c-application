import { useEffect, useState } from 'react';
import { syncContractPayState } from '@/utils/payment';
import { getEnv, taroModule, getTaro } from '@brushes/utils';
import { get } from 'lodash-es';

const config = {
  success: {
    icon: 'zhifuchenggong',
    msg: '支付成功',
    buttonText: '查看订单',
    menuCode: 'orderDetail',
    color: '#2ed82e'
  },
  error: {
    icon: 'zhifushibai',
    info: '您的订单将保留15分钟，可点击下方“去支付”完成订单',
    buttonText: '去支付',
    menuCode: 'paymentMode',
    color: 'red'
  }
};
interface ResultType {
  sysRecode: 'error' | 'success';
  dataObj: null | object;
  errorCode: null | string;
  msg: string;
}
export function useOrderResultResult(code: string) {
  const [result, setResult] = useState({
    icon: 'daifahuo1',
    msg: '支付中',
    color: '#2ed82e',
    buttonText: '去支付',
    dataObj: {}
  } as any);
  const [loading, setLoading] = useState(false);
  const isWeapp = getEnv();
  useEffect(() => {
    (async () => {
      const menuOpcode = get(taroModule, 'taroMenu[0].menuOpcode', 'index');
      if (isWeapp) {
        const Taro = getTaro();
        Taro.setStorageSync('menuOpcode', menuOpcode);
      }
      setLoading(true);
      try {
        const data: ResultType = await syncContractPayState({
          contractBillcode: code,
          isLocalMock: !isWeapp
        });
        const { sysRecode, dataObj, ...rest } = data;
        setResult({
          dataObj,
          sysRecode,
          ...rest,
          ...config[sysRecode]
        });
      } catch (err) {
        setResult({
          dataObj: {
            contractBillcode: code
          },
          msg: err,
          ...config['error']
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    result,
    loading
  };
}
