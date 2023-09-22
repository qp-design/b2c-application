import { useEffect, useMemo, useState } from 'react';
import { getEnv, getStorage, getTaro } from '@brushes/utils';
import { queryOcsconfigList } from 'qj-b2c-api';
import { queryOcserviceConfPageByMember } from 'qj-b2b-api';
import { get } from 'lodash-es';

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
        return (await queryOcserviceConfPageByMember().then((res: any)=> res.list));
    }
  };

  const handleList = (list: Array<any>) => {
    if (list.length === 0) return ['未知客服信息'];
    let arr: string[] = [];
    if (platform === 'b2c') {
      const target = get(list[0], 'ocsOcserviceReDomain.ocsOcserviceConfReDomainList', []);
      for (let i = 0; i < target.length; i++) {
        const item = target[i];
        arr.push(`${get(item, 'ocserviceConfRemark')}: ${get(item, 'ocserviceConfValue')}`);
      }
    } else if (platform === 'b2b') {
      arr.push(`客服电话: ${get(list[0], 'ocserviceConfValue')}`);
    }
    return arr;
  };

  const servicePopup = () => {
    if (!flag) return;
    const Taro = getTaro();
    Taro.showActionSheet({
      itemList: list,
      // success: function (res: any) {
      //   console.log(res.tapIndex);
      // },
      // fail: function (res: any) {
      //   console.log(res.errMsg);
      // }
    });
  };

  return {
    servicePopup
  };
};
