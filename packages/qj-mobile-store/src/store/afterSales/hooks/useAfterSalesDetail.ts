import { useEffect, useState } from 'react';
import { getRefundByCode, sendGoods, queryExpressPageForProp, cancelAfterSales } from 'qj-b2c-api';
import { showToast } from '@/utils';
import { removeRequestCacheByKey } from '@brushes/optimize';
import { getEnv } from '@brushes/utils';

interface useAfterSalesDetailType {
  refundCode: string;
}

export const useAfterSalesDetail = ({ refundCode }: useAfterSalesDetailType) => {
  const [afterSalesDetailInfo, setAfterSalesDetailInfo] = useState({});
  const [companyList, setCompanyList] = useState([]);
  const [popupShow, setPopupShow] = useState(false);
  // 用户填写的物流编号
  const [packageBillno, setPackageBillno] = useState('');
  //物流公司编码
  const [packageCode, setPackageCode] = useState('');
  // 物流公司名称
  const [packageName, setPackageName] = useState('');

  const [loading, setLoading] = useState(false);

  const isWeapp = getEnv();

  useEffect(() => {
    (async () => {
      await getAfterSalesDetailInfo();
    })();
  }, []);

  const getAfterSalesDetailInfo = async () => {
    setLoading(true);
    try {
      removeRequestCacheByKey(getRefundByCode);
      const result = await getRefundByCode({
        refundCode,
        isLocalMock: !isWeapp
      });

      if (result.dataState === 1) {
        await getCompanyList();
      }
      setAfterSalesDetailInfo(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const submitExpressInfo = async () => {
    if (!packageBillno || !packageCode || !packageName) {
      showToast('请填写完成信息', 'error');
      return;
    }
    try {
      await sendGoods({
        packageBillno,
        refundCode,
        packageCode,
        packageName
      });
      removeRequestCacheByKey(getRefundByCode);
      await getAfterSalesDetailInfo();
    } catch (err) {
      console.log(err);
    }
  };

  const getCompanyList = async () => {
    try {
      const result = await queryExpressPageForProp({ dataState: 1 });
      setCompanyList(result.list);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePopupShow = () => {
    setPopupShow((prevState) => !prevState);
  };

  const handleCancelAfterSales = async (goodsCode: string) => {
    try {
      await cancelAfterSales({ goodsCode, refundCode });
      removeRequestCacheByKey(getRefundByCode);
      await getAfterSalesDetailInfo();
    } catch (err) {
      console.log(err);
    }
  };

  const chooseCompany = (e: any) => {
    const resultArr = e.detail.value.split('-');
    setPackageName(resultArr[0]);
    setPackageCode(resultArr[1]);
    setPopupShow(false);
  };

  return {
    setAfterSalesDetailInfo,
    afterSalesDetailInfo,
    submitExpressInfo,
    companyList,
    handleCancelAfterSales,
    popupShow,
    handlePopupShow,
    chooseCompany,
    packageName,
    setPackageBillno,
    loading
  };
};
