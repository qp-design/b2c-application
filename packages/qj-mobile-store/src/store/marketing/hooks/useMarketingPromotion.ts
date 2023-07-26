import { queryPromotioPage } from 'qj-b2c-api';
import { useEffect, useRef, useState } from 'react';
import { get } from 'lodash-es';
import { getEnv } from '@brushes/utils';

export const useMarketingPromotion = ({ params }: { params: string }) => {
  const listRef = useRef<Array<any>>([]);
  const [list, setList] = useState<Array<any>>([]);
  const page = useRef(0);
  const rows = useRef(10);

  useEffect(() => {
    page.current = 0;
    listRef.current = [];
    getData();
  }, [params]);

  const getData = async () => {
    const isTaro = getEnv();
    ++page.current;
    try {
      const result = await queryPromotioPage({
        isLocalMock: !isTaro,
        pbCode: params,
        list: 1,
        page: page.current,
        rows: rows.current
      });
      const arr = get(result, 'list', []);
      listRef.current.push(...arr);
      setList(listRef.current);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    list,
    getData
  };
};
