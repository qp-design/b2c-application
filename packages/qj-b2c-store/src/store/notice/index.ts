import { useEffect, useMemo, useState } from 'react';
import { queryNoticePage } from 'qj-b2c-api';
import { get } from 'lodash-es';
import { navigatorHandler } from '@brushes/utils';
// import { routerMap } from '@/utils/routerMap';

export function useNotice(num: number) {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await queryNoticePage({
          page: 1,
          rows: num,
          dataState: 1
        });
        const list = get(data, 'list', []);
        setList(list);
      } catch (err) {}
    })();
  }, [num]);

  const content = useMemo(() => {
    return list.map((item: any) => item.noticeTitle);
  }, [list]);

  const navigator = (e: number) => {
    const noticeId = get(list, `${e}.noticeId`, '');
    navigatorHandler('noticeDetail', {
      noticeId
    });
    // navigatorImpl('noticeDetail', `${routerMap.noticeDetail}?noticeId=${noticeId}`);
  };

  return {
    content,
    navigator
  };
}
