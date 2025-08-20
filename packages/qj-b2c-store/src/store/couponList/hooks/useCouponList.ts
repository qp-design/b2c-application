import { useEffect, useRef, useState } from 'react';
import { queryUsercouponPageForC } from 'qj-b2c-api';

export const useCouponList = () => {
  // const [coe, setCoe] = useState(0);
  const [list, setList] = useState<Array<any>>([]);
  // const [page, setPage] = useState(1);
  const coe = useRef(0);
  const page = useRef(1);
  const rows = useRef(10);
  const config = useRef([
    {
      id: 1,
      label: '未使用',
      dataState: 0,
      styleName: 'unused',
      text: ''
    },
    {
      id: 2,
      label: '已使用',
      dataState: 1,
      styleName: 'used'
    },
    {
      id: 3,
      label: '已失效',
      dataState: 2,
      styleName: 'overdue'
    }
  ]);

  useEffect(() => {
    (async () => {
      await getList();
    })();
  }, []);

  const getList = async () => {
    try {
      const result = await queryUsercouponPageForC({
        page: page.current,
        rows: rows.current,
        dataState: config.current[coe.current].dataState,
        pbCode: '0004,0005'
      });
      setList((val) => {
        return val.concat(result.list || []);
      });
      page.current += 1;
    } catch (err) {
      console.log(err);
    }
  };

  const switchTab = async (index: number) => {
    coe.current = index;
    page.current = 1;
    setList([]);
    await getList();
  };

  return {
    config,
    coe,
    list,
    setList,
    getList,
    switchTab
  };
};
