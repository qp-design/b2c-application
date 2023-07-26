import { useEffect, useState } from 'react';
import { getRefundGoods } from 'qj-b2c-api';
import { getEnv } from '@brushes/utils';
import { navigatorHandler } from '@brushes/utils';

interface useAfterSalesChooseTypeType {
  contractBillcode: string;
  skuCode: string;
}

export const useAfterSalesChooseType = ({ contractBillcode, skuCode }: useAfterSalesChooseTypeType) => {
  const [goodsInfo, setGoodsInfo] = useState<any>({});
  const [typeTip, setTypeTip] = useState(false);
  const [goodsNum, setGoodsNum] = useState(1);
  const [goodsPrice, setGoodsPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [stepLock, setStepLock] = useState(false);

  useEffect(() => {
    (async () => {
      await getGoodsInfo();
    })();
  }, []);

  const getGoodsInfo = async () => {
    setLoading(true);
    try {
      const isWeapp = getEnv();
      const result = await getRefundGoods({
        contractBillcode,
        skuCode,
        isLocalMock: !isWeapp
      });
      const resultObj = result.dataObj;
      const { contractGoodsMoney, contractGoodsAremoney, goodsCamount, contractGoodsArefnum } = resultObj;
      const price = +contractGoodsMoney - +contractGoodsAremoney; // 可进行售后的总金额
      setGoodsInfo(resultObj);
      if (price === 0.01) {
        setGoodsPrice(price);
        setStepLock(true);
        setGoodsNum(+goodsCamount - +contractGoodsArefnum);
        return;
      }
      setGoodsPrice(resultObj.contractGoodsPrice);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // skuCode: "718838869900980254"
  // contractBillcode: "719351301652148261"

  const handleStep = (type: string) => {
    if (stepLock) return;
    const { goodsCamount, contractGoodsArefnum, contractGoodsMoney, contractGoodsAremoney, contractGoodsPrice } = goodsInfo;

    if (type === 'plus') {
      const max = +goodsCamount - +contractGoodsArefnum;
      if (goodsNum >= max) return;
      if (max === goodsNum + 1) {
        setGoodsPrice(contractGoodsMoney - contractGoodsAremoney);
      } else {
        setGoodsPrice((goodsNum + 1) * contractGoodsPrice);
      }
      setGoodsNum((prevState) => prevState + 1);
    } else if (type === 'minus') {
      if (goodsNum === 1) return;
      setGoodsPrice((goodsNum - 1) * contractGoodsPrice);
      setGoodsNum((prevState) => prevState - 1);
    }
  };

  const goApply = (stat: number | string, contractBillcode: string, skuCode: string, goodsNum: number) => {
    navigatorHandler('afterSalesApply', {
      refundType: stat,
      contractBillcode,
      skuCode,
      goodsNum,
      goodsPrice
    });
  };

  return {
    typeTip,
    setTypeTip,
    goodsNum,
    handleStep,
    goodsInfo,
    goApply,
    loading,
    goodsPrice,
    stepLock
  };
};
