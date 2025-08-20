import { getContractByCode, checkRefund } from 'qj-b2c-api';
import { getEnv, navigatorHandler } from '@brushes/utils';
import { useEffect, useState } from 'react';
import { orderStatusImpl } from '@/store/order';
import { isEmpty } from 'lodash-es';
import { showToast } from '@/utils';

const orderMock = {
  goodsList: [],
  dataState: '',
  packageRemark: '',
  goodsReceiptMem: '',
  goodsReceiptPhone: '',
  goodsReceiptArrdess: '',
  dataBmoney: 0,
  goodsPmoney: 0,
  contractInmoney: 0,
  contractBillcode: '',
  refundMoney: 0,
  gmtCreate: '',
  goodsNum: 0,
  contractId: 0
};

interface itemType {
  contractBillcode: string;
  skuCode: string;
}

export const useOrderDetail = (contractBillcode: string) => {
  const [status, setStatus] = useState('');
  const isWeapp = getEnv();
  const [orderDetail, setOrderDetail] = useState<typeof orderMock>(orderMock);
  useEffect(() => {
    (async () => {
      try {
        const data = await getContractByCode({
          contractBillcode,
          isLocalMock: !isWeapp
        });
        if (isEmpty(data)) return;
        setStatus(orderStatusImpl(data.dataState));
        setOrderDetail(data);
      } catch (err) {
        console.log(45, err);
      }
    })();
  }, []);

  const handleApplyBtn = async (item: itemType, dataState: number | string) => {
    try {
      const { contractBillcode, skuCode } = item;
      const result = await checkRefund({ contractBillcode, skuCode });

      if (result.success === false) {
        showToast(result.msg, 'none');
        return;
      }
      navigatorHandler('refundType', { contractBillcode, skuCode, dataState });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    orderDetail,
    status,
    handleApplyBtn
  };
};
