import { queryUsercouponPageForC } from 'qj-b2c-api';
import { useEffect, useRef, useState } from 'react';

export const useOverdue = () => {
  const [overdueList, setOverdueList] = useState([]);
  const overduePage = useRef(1);

  useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  const init = async () => {
    overduePage.current = 1;
    setOverdueList([]);
    await getData();
  };

  const getData = async () => {
    try {
      const result = await queryUsercouponPageForC({
        page: overduePage.current,
        rows: 100,
        dataState: 2,
        pbCode: '0004,0005'
      });
      setOverdueList(result.list);
      overduePage.current += 1;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    overdueList,
    getData,
    init
  };
};
