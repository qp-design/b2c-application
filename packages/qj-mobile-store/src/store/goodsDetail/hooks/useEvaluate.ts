import { queryEvaluateGoodsPagetrue } from 'qj-b2c-api';
import { useEffect, useState } from 'react';

export const useEvaluate = (goodsCode: string) => {
  const [evaluate, setEvaluate] = useState([]);
  // 评价
  useEffect(() => {
    (async () => {
      try {
        if (!goodsCode) return;
        const data = await queryEvaluateGoodsPagetrue({
          goodsCode,
          page: 1,
          rows: 10
        });
        setEvaluate(data.list || []);
      } catch (err) {}
    })();
  }, [goodsCode]);

  return evaluate;
};
