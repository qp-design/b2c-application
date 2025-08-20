import { useEffect, useState } from 'react';
import { getContractByCode, queryExpressInfo } from 'qj-b2c-api';
import { get } from 'lodash-es';
import { getEnv } from '@brushes/utils';

const stateObj = {
  '0': '在途',
  '1': '揽收',
  '2': '疑难',
  '3': '签收',
  '4': '退签',
  '5': '派件',
  '8': '清关',
  '14': '拒签'
};

export const useExpressInfo = (code: string) => {
  const [info, setInfo] = useState({});
  const [detail, setDetail] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const isWeapp = getEnv();
        const expressInfo = await getContractByCode({ contractBillcode: code, isLocalMock: !isWeapp });
        setInfo(expressInfo);
        const expressType = get(expressInfo, 'packageList[0].expressCode', '');
        const expressNo = get(expressInfo, 'packageList[0].packageBillno');
        const expressDetail = await queryExpressInfo({ expressNo, expressType, isLocalMock: !isWeapp });
        setDetail(JSON.parse(expressDetail.dataObj));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return {
    info,
    detail,
    stateObj
  };
};
