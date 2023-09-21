import { useEffect, useMemo, useState } from 'react';
import { getEnv, getStorage, getTaro } from '@brushes/utils';
import { queryOcsconfigList } from 'qj-b2c-api';
import { queryOcserviceConfPageByMember } from 'qj-b2b-api';

export const useService = (platform = 'b2c') => {
  const [list, setList] = useState<string[]>([]);
  const flag = useMemo(() => getEnv(), []);

  useEffect(() => {
    (async () => {
      const val = getStorage('service');
      if (val) {
        setList(handleList(val));
      } else {
        const result = await handlePlatformData();
        setList(handleList(result));
      }
    })();
  }, []);

  const handlePlatformData = async () => {
    switch (platform) {
      case 'b2c':
        return await queryOcsconfigList();
      case 'b2b':
        return (await queryOcserviceConfPageByMember().list) || [];
    }
  };

  const handleList = (list: any) => {
    let arr = [];
    if (platform === 'b2c') {
      const target = list[0].ocsOcserviceReDomain.ocsOcserviceConfReDomainList || [];
      for (let i = 0; i < target.length; i++) {
        const item = target[i];
        arr.push(`${item.ocserviceConfRemark}: ${item.ocserviceConfValue}`);
      }
    } else if (platform === 'b2b') {
      arr.push(`客服电话: ${list[0].ocserviceConfValue}`);
    }
    return arr;
  };

  const servicePopup = () => {
    if (!flag) return;
    const Taro = getTaro();
    Taro.showActionSheet({
      itemList: list,
      success: function (res: any) {
        console.log(res.tapIndex);
      },
      fail: function (res: any) {
        console.log(res.errMsg);
      }
    });
  };

  return {
    servicePopup
  };
};
