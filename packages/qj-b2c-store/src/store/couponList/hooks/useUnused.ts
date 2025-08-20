import { queryUsercouponPageForC } from 'qj-b2c-api';
import { useEffect, useRef, useState } from 'react';

export const useUnused = () => {
  const [unusedList, setUnusedList] = useState([]);
  const unusedPage = useRef(1);

  useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  const init = async () => {
    unusedPage.current = 1;
    setUnusedList([]);
    await getData();
  };

  const getData = async () => {
    try {
      const result = await queryUsercouponPageForC({
        page: unusedPage.current,
        rows: 100,
        dataState: 0,
        pbCode: '0004,0005'
      });
      setUnusedList(result.list);
      unusedPage.current += 1;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    unusedList,
    getData,
    init
  };
};
