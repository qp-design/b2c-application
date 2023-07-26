import { useMemo } from 'react';

export const useBanner = (arr: Array<any>) => {
  return useMemo(() => {
    return arr.map((item: any) => {
      return {
        imgUrl: item.goodsFileUrl,
        link: ''
      };
    });
  }, [arr]);
};
