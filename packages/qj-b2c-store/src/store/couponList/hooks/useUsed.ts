import { queryUsercouponPageForC } from 'qj-b2c-api';
import { useEffect, useRef, useState } from 'react';

export const useUsed = () => {
  const [usedList, setUsedList] = useState([]);
  const usedPage = useRef(1);

  useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  const init = async () => {
    usedPage.current = 1;
    setUsedList([]);
    await getData();
  };

  const getData = async () => {
    try {
      const result = await queryUsercouponPageForC({
        page: usedPage.current,
        rows: 100,
        dataState: 1,
        pbCode: '0004,0005'
      });
      setUsedList(result.list);
      usedPage.current += 1;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    usedList,
    getData,
    init
  };
};
