//@ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { saveOrderToPay, syncContractState, syncContractBatchState, paymentCommit } from '@/utils/payment';
import { reLaunchHandler, setStorage, taroMessage } from '@brushes/utils';
import { getEnv } from '@brushes/utils';

interface payType {
  ptradeSeqno: string;
  contractBlance: string;
  payChannelList: Array<any>;
}
export function useOrderResult({ contractBillcode, contractBbillcode }: { contractBillcode: string; contractBbillcode: string }) {
  const [loading, setLoading] = useState(false);
  const channel = useRef('');
  const isWeapp = getEnv();
  const [channelList, setChannelList] = useState([]);
  const result = useRef<payType>({} as any);
  const contract = useRef({
    dataBmoney: '',
    contractBillcode: ''
  });
  useEffect(() => {
    (async () => {
      try {
        const func = contractBillcode
          ? syncContractState({
              contractBillcode,
              isLocalMock: !isWeapp
            })
          : syncContractBatchState({
              contractBbillcode,
              isLocalMock: !isWeapp
            });
        const data = await func;
        contract.current = data.dataObj;
        const res = await saveOrderToPay({
          contractBillcode: contract.current.contractBillcode ?? '',
          isLocalMock: !isWeapp
        });

        setChannelList(res.payChannelList);
        result.current = res;
      } catch (err) {
        console.log(44, err);
      }
    })();
  }, []);

  const handleRadio = (params: any) => {
    channel.current = params.detail.value;
  };

  const paymentImpl = () => {
    if (!channel.current) {
      taroMessage('请选择支付方式', 'none');
    }
    switch (channel.current) {
      case 'wechatmini':
        wechatmini();
        break;
      case 'wechatwap':
        wechatwap();
        break;
      case 'alipaywap':
        alipaywap();
        break;
    }
  };

  const commonPrevPayImpl = () => {
    setLoading(true);
    const { ptradeSeqno, contractBlance, payChannelList } = result.current;
    const { fchannelCode, faccountOuterNo = '' } = fetchPayCode(payChannelList, channel.current);
    return {
      ptradeSeqno,
      contractBlance,
      fchannelCode,
      faccountOuterNo
    };
  };

  const fetchPayCode = (payChannelList, code) => {
    return payChannelList.find((item) => item.fchannelCode === code) || {};
  };

  //非基本户支付场景
  const nonBasicAccoutPrepay = async () => {
    const code = contract.current.contractBillcode ?? '';
    setStorage('contractBillcode', {
      contractBillcode: code
    });
    const { ptradeSeqno, contractBlance, fchannelCode, faccountOuterNo } = commonPrevPayImpl();

    const pyJsons = [
      {
        faccountIdType: 'ACCOUNT',
        fchannelCode,
        orderAmount: contract.current.dataBmoney,
        faccountId: faccountOuterNo
      }
    ];
    return await paymentCommit({
      ptradeSeqno,
      payCommitStr: JSON.stringify(pyJsons),
      contractBlance
    });
  };

  // 支付宝
  const alipaywap = async () => {
    try {
      const res = await nonBasicAccoutPrepay();
      let v_html = document.getElementById('v_html');
      v_html.innerHTML = '<div>' + res.dataObj.htmlStr + '</div>';
      document.forms[0].submit();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  // h5 微信
  const wechatwap = async () => {
    try {
      const res = await nonBasicAccoutPrepay();
      let v_html = document.getElementById('v_html');
      v_html.innerHTML = '<div>' + res.dataObj.htmlStr + '</div>';
      document.getElementById('paaspaysubmit').submit();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  // 微信原生
  const wechatmini = async () => {
    try {
      const res = await nonBasicAccoutPrepay();
      let data = res.dataObj.requestData;
      wx.requestPayment({
        timeStamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.package,
        signType: data.signType,
        paySign: data.paySign,
        success: function (res) {
          const code = contract.current.contractBillcode ?? '';
          reLaunchHandler('result', { code });
        },
        fail: function (res) {
          setLoading(false);
        },
        complete: function (res) {
          setLoading(false);
        }
      });
    } catch (err) {
      setLoading(false);
    }
  };

  return {
    paymentImpl,
    channelList,
    handleRadio,
    contract,
    loading
  };
}
