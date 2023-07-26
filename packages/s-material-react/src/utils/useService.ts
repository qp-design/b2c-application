import { useEffect, useMemo, useState } from 'react';
import { getEnv, getStorage, getTaro } from '@brushes/utils';
import { queryOcsconfigList } from 'qj-b2c-api';
export const useService = () => {
  const [list, setList] = useState<string[]>([]);
  const flag = useMemo(() => getEnv(), []);

  useEffect(() => {
    (async () => {
      const val = getStorage('service');
      if (val) {
        setList(handleList(val));
      } else {
        const result = await queryOcsconfigList();
        setList(handleList(result));
      }
    })();
  }, []);

  const handleList = (list: any) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i].ocsOcserviceReDomain;
      arr.push(`${item.ocserviceName}: ${item.ocserviceRemark}`);
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
