import { queryGoodsClassTree } from 'qj-b2c-api';
import { useEffect, useState } from 'react';
import { getEnv } from '@brushes/utils';
import { get } from 'lodash-es';

export function useGoodsClassify() {
  const [activeKey, setActiveKey] = useState<string>('');
  const [navList, setNavList] = useState<Array<any>>([] as any);
  const flag = getEnv();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let commits = await queryGoodsClassTree();
      setNavList(commits || []);
      const code = get(commits, '[0].goodsClassCode');
      setActiveKey(code);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    activeKey,
    navList,
    flag,
    setActiveKey
  };
}
