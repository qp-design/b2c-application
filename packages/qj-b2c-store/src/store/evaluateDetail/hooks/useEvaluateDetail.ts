import { useEffect, useRef, useState } from 'react';
import { getContractByCode, queryUseTemplate, saveEvaluateGoods, saveEvaluateShop } from 'qj-b2c-api';
import { getEnv, navigatorHandler } from '@brushes/utils';
// import { routerMap } from '@/utils/routerMap';
import { get } from 'lodash-es';

export const useEvaluateDetail = (code: string) => {
  const [orderInfo, setOrderInfo] = useState<Array<any>>([]);
  const starArrTemp = useRef([]);
  const params = useRef({});
  const isTaro = getEnv();
  useEffect(() => {
    (async () => {
      await getStarTemp();
      await getDate();
    })();
  }, []);

  const getDate = async () => {
    try {
      const result = await getContractByCode({ contractBillcode: code, isLocalMock: !isTaro });
      const formatResult = formatData(get(result, 'goodsList', []));
      const { contractBillcode, memberBcode, memberBname, memberCode, memberName } = formatResult[0];
      params.current = {
        contractBillcode,
        memberBcode,
        memberBname,
        memberCode,
        memberName
      };
      setOrderInfo(formatResult);
    } catch (err) {
      console.log(err);
    }
  };

  const formatData = (arr: Array<any>) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].upImgLength = true;
      arr[i].upImg = [];
      arr[i].evaluateGoodsImgs = '';
      arr[i].evaluateScopeList = [starArrTemp.current[0]];
      arr[i].evaluateGoodsContent = '';
    }
    return arr;
  };

  const getStarTemp = async () => {
    try {
      const result = await queryUseTemplate({ applyTarget: 'goods', isLocalMock: !isTaro });
      starArrTemp.current = result[0].templateValuesReList;
    } catch (err) {
      console.log(err);
    }
  };

  const changeStar = (index: number, starNum: number) => {
    const arr = [...orderInfo];
    const resultArr: never[] = [];
    for (let i = 0; i < starNum; i++) {
      resultArr.push(starArrTemp.current[i]);
    }
    // @ts-ignore
    arr[index]['evaluateScopeList'] = resultArr;
    setOrderInfo(arr);
  };

  const changeContent = (index: number, e: any) => {
    const arr = [...orderInfo];
    // @ts-ignore
    arr[index]['evaluateGoodsContent'] = e.detail.value;
    setOrderInfo(arr);
  };

  const Submit = async () => {
    try {
      await saveEvaluateGoods({
        paramStr: JSON.stringify(orderInfo)
      });
      await saveEvaluateShop({
        paramStr: JSON.stringify(orderInfo),
        ...params.current
      });
      navigatorHandler('orderlist');
    } catch (err) {
      console.log(err);
    }
  };

  return {
    orderInfo,
    changeStar,
    Submit,
    changeContent
  };
};
